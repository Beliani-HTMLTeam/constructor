import fs from 'fs/promises';
import path from 'path';

/**
 * Vite plugin to handle campaign file saving during development
 */
export function saveCampaignPlugin() {
  return {
    name: 'save-campaign',
    configureServer(server) {
      // Endpoint to save campaign files
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

            // Validate inputs
            if (!filename || !content || !userScope) {
              res.statusCode = 400;
              res.end(JSON.stringify({ error: 'Missing required fields' }));
              return;
            }

            // Construct the path to save the file
            const campaignDir = path.join(process.cwd(), 'campaigns', userScope);
            const filePath = path.join(campaignDir, filename);

            // Ensure the directory exists
            await fs.mkdir(campaignDir, { recursive: true });

            // Write the file
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

      // New endpoint to list campaign files
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
