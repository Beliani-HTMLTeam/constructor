import { readdir, stat, rename } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 👇 Change this path if needed
const folderRelativePath = "./campaigns/KamilO";

async function renameFilesByDate(folderPath) {
  const fullFolderPath = path.resolve(__dirname, folderPath);
  console.log(`📁 Scanning folder: ${fullFolderPath}`);

  let entries;
  try {
    entries = await readdir(fullFolderPath);
    console.log(`📄 Found ${entries.length} items in folder.`);
  } catch (err) {
    console.error("❌ Failed to read directory:", err.message);
    return;
  }

  const dateRegex = /(\d{4})[-]?(\d{2})[-]?(\d{2})/;
  const filesToRename = [];

  for (const file of entries) {
    const filePath = path.join(fullFolderPath, file);
    let stats;
    try {
      stats = await stat(filePath);
    } catch (err) {
      console.error(`❌ Failed to stat ${file}: ${err.message}`);
      continue;
    }

    if (!stats.isFile()) {
      console.log(`🔸 Skipping (not a file): ${file}`);
      continue;
    }

    const match = file.match(dateRegex);
    if (!match) {
      console.log(`🔸 Skipping (no date match): ${file}`);
      continue;
    }

    const dateRaw = match[1] + match[2] + match[3]; // For sorting
    const dateFormatted = `${match[1]}-${match[2]}-${match[3]}`;

    const cleaned = file
      .replace(/^\d{3}_/, "")
      .replace(dateRegex, "")
      .replace(/^[-_]/, "");

    const ext = path.extname(cleaned);
    const base = path.basename(cleaned, ext);
    const cleanedName = `${base}${ext}`;

    console.log(`✅ Match: ${file} → ${dateFormatted} → ${cleanedName}`);

    filesToRename.push({
      original: file,
      dateRaw,
      dateFormatted,
      cleanedName,
    });
  }

  if (filesToRename.length === 0) {
    console.log("⚠️ No files matched for renaming.");
    return;
  }

  // Sort newest first
  filesToRename.sort((a, b) => b.dateRaw.localeCompare(a.dateRaw));

  console.log("\n🔄 Starting rename process...\n");

  for (let i = 0; i < filesToRename.length; i++) {
    const { original, dateFormatted, cleanedName } = filesToRename[i];
    const prefix = String(i + 1).padStart(3, "0") + "_";
    const newName = `${prefix}${dateFormatted}-${cleanedName}`;

    if (original === newName) {
      console.log(`✅ Already named correctly: ${original}`);
      continue;
    }

    const oldPath = path.join(fullFolderPath, original);
    const newPath = path.join(fullFolderPath, newName);

    try {
      await rename(oldPath, newPath);
      console.log(`⚒ Renamed: ${original} → ${newName}`);
    } catch (err) {
      console.error(`❌ Failed to rename ${original}: ${err.message}`);
    }
  }

  console.log("\n✅ Done.");
}

renameFilesByDate(folderRelativePath);

