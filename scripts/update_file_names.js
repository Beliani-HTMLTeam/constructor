import { readdir, stat, rename, readFile } from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import readline from "readline";

// Resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Function to read scope from .env file
async function getScope() {
  try {
    const envPath = path.resolve(__dirname, "../.env");
    const envContent = await readFile(envPath, "utf-8");
    const match = envContent.match(/VITE_SCOPE=(.+)/);
    return match ? match[1].trim() : "KamilO"; // Default fallback
  } catch (err) {
    console.log("⚠️ Could not read .env file, using default scope: KamilO");
    return "KamilO";
  }
}

const scope = await getScope();
const folderRelativePath = `../campaigns/${scope}`;

// Helper function to get user confirmation
function askUserConfirmation(question) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      rl.close();
      resolve(
        answer.toLowerCase().trim() === "y" ||
          answer.toLowerCase().trim() === "yes",
      );
    });
  });
}

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

  console.log("\n📋 CURRENT FILES:");
  console.log("=".repeat(50));

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

    console.log(`📄 ${file}`);

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

  console.log("\n🔄 PROPOSED NEW ORDER (newest first):");
  console.log("=".repeat(50));

  for (let i = 0; i < filesToRename.length; i++) {
    const { original, dateFormatted, cleanedName } = filesToRename[i];
    const prefix = String(i + 1).padStart(3, "0") + "_";
    const newName = `${prefix}${dateFormatted}-${cleanedName}`;

    const status = original === newName ? "✅ (no change)" : "🔄 (will rename)";
    console.log(`${i + 1}. ${original} → ${newName} ${status}`);
  }

  console.log("\n📊 SUMMARY:");
  const willChange = filesToRename.filter((item, i) => {
    const prefix = String(i + 1).padStart(3, "0") + "_";
    const newName = `${prefix}${item.dateFormatted}-${item.cleanedName}`;
    return item.original !== newName;
  }).length;
  console.log(`Total files: ${filesToRename.length}`);
  console.log(`Will be renamed: ${willChange}`);
  console.log(`Already correct: ${filesToRename.length - willChange}`);

  // Ask for user confirmation
  console.log("\n" + "=".repeat(50));
  const shouldProceed = await askUserConfirmation(
    "🤔 Do you want to continue with renaming? (y/n): ",
  );

  if (!shouldProceed) {
    console.log("❌ Operation cancelled by user.");
    return;
  }

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
