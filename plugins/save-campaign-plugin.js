import fs from 'fs/promises';
import path from 'path';

export function saveCampaignPlugin() {
  return {
    name: 'save-campaign',
    configureServer(server) {
      server.middlewares.use('/api/save-campaign', async (req, res, next) => {
        if (req.method !== 'POST') {
          return next();
        }

        let body = '';
        req.on('data', (chunk) => {
          body += chunk.toString();
        });

        req.on('end', async () => {
          try {
            const { filename, content, userScope } = JSON.parse(body);

            if (!filename || !content || !userScope) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Missing required fields' }));
              return;
            }

            const campaignDir = path.join(process.cwd(), 'campaigns', userScope);
            const filePath = path.join(campaignDir, filename);
            await fs.mkdir(campaignDir, { recursive: true });
            await fs.writeFile(filePath, content, 'utf8');

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(
              JSON.stringify({
                success: true,
                path: `campaigns/${userScope}/${filename}`,
                message: 'Campaign file saved successfully',
              })
            );
          } catch (error) {
            console.error('Error saving campaign file:', error);
            res.statusCode = 500;
            res.end(
              JSON.stringify({
                error: 'Failed to save campaign file',
                details: error.message,
              })
            );
          }
        });
      });

      server.middlewares.use('/api/read-campaign', async (req, res, next) => {
        if (req.method !== 'GET') return next();

        try {
          const url = new URL(req.url, `http://${req.headers.host}`);
          const userScope = url.searchParams.get('scope');
          const filename = url.searchParams.get('filename');

          if (!userScope || !filename) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Missing scope or filename parameter' }));
            return;
          }

          if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Invalid filename' }));
            return;
          }

          const filePath = path.join(process.cwd(), 'campaigns', userScope, filename);
          const content = await fs.readFile(filePath, 'utf8');

          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ content }));
        } catch (error) {
          res.statusCode = 404;
          res.end(JSON.stringify({ error: 'File not found', details: error.message }));
        }
      });

      server.middlewares.use('/api/delete-campaign', async (req, res, next) => {
        if (req.method !== 'POST') return next();

        let body = '';
        req.on('data', (chunk) => { body += chunk.toString(); });
        req.on('end', async () => {
          try {
            const { filename, userScope } = JSON.parse(body);

            if (!filename || !userScope) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Missing required fields' }));
              return;
            }

            if (filename.includes('..') || filename.includes('/') || filename.includes('\\')) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Invalid filename' }));
              return;
            }

            const filePath = path.join(process.cwd(), 'campaigns', userScope, filename);
            await fs.unlink(filePath);

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ success: true, message: 'Campaign deleted' }));
          } catch (error) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: 'Failed to delete campaign', details: error.message }));
          }
        });
      });

      server.middlewares.use('/api/campaigns', async (req, res, next) => {
        if (req.method !== 'GET') {
          return next();
        }

        try {
          const url = new URL(req.url, `http://${req.headers.host}`);
          const userScope = url.searchParams.get('scope');

          if (!userScope) {
            res.statusCode = 400;
            res.end(JSON.stringify({ error: 'Missing scope parameter' }));
            return;
          }

          const campaignDir = path.join(process.cwd(), 'campaigns', userScope);

          try {
            const files = await fs.readdir(campaignDir);
            // Filter only .js files, exclude archive directory
            const jsFiles = files.filter(
              (file) => file.endsWith('.js') && !file.startsWith('archive')
            );

            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ files: jsFiles }));
          } catch (dirError) {
            // Directory doesn't exist yet
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify({ files: [] }));
          }
        } catch (error) {
          console.error('Error listing campaign files:', error);
          res.statusCode = 500;
          res.end(
            JSON.stringify({
              error: 'Failed to list campaign files',
              details: error.message,
            })
          );
        }
      });
    },
  };
}
