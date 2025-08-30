import { FcFile } from "react-icons/fc";
import { FcMusic } from "react-icons/fc";
import { IoImageSharp } from "react-icons/io5";
import { FaFilePdf } from "react-icons/fa";
import { MdFolderZip } from "react-icons/md";

export const FileCheck = (filename) => {
  // Extract extension
  const ext = filename.split(".").pop().toLowerCase();

  // Common image formats
  const imageExts = ["jpg", "jpeg", "png", "gif", "bmp", "svg", "webp", "tiff"];
  // Common music formats
  const musicExts = ["mp3", "wav", "flac", "aac", "ogg", "m4a", "wma"];
  // PDF
  const pdfExts = ["pdf"];
  // ZIP / compressed
  const zipExts = ["zip", "rar", "7z", "tar", "gz"];
switch (true) {
    // 🎨 Image files
    case imageExts.includes(ext):
      return (
        <IoImageSharp
          className="margin-right-desktop"
          style={{ color: "rgb(144, 202, 249)" }}
        />
      );

    // 🎵 Music files
    case musicExts.includes(ext):
      return <FcMusic className="margin-right-desktop" />;

    // 📕 PDF
    case pdfExts.includes(ext):
      return <FaFilePdf className="margin-right-desktop" style={{ color: "red" }} />;

    // 🗜️ Compressed files
    case zipExts.includes(ext):
      return <MdFolderZip className="margin-right-desktop" style={{ color: "orange" }} />;

    // 📄 Default (any unknown file)
    default:
      return <FcFile className="margin-right-desktop" />;
  }
};
