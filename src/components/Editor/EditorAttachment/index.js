import cx from "classnames";
import formatFunc from "date-fns/format";

import styles from "./EditorAttachment.module.scss";

export function getFileExtension(fileName = "") {
  const parts = fileName.split(".");

  return parts[parts.length - 1];
}

export function mapFileExtension(extension = "docx") {
  switch (extension) {
    case "doc":
    case "docx":
      return "word";
    case "xlsx":
    case "xls":
    case "csv":
      return "excel";
    case "pdf":
    default:
      return "pdf";
  }
}

export default function EditorAttachment({
  file = {},
  fileIdx = -1,
  wrapperWidth = 0,
  handleRequestFileDelete = () => {},
  handleFileComplete = () => {},
  handleFileReview = () => {},
  disabled = false,
  withSignature = true,
  size = null,
  className = null,
}) {
  const signatures = file.firmas ?? {
    completado: [],
    revisado: [],
  };

  const mapSignature = (
    signature = {
      created_at: "",
      created_by: {
        email: "",
        id: "",
        name: "",
        sigla: "",
      },
    }
  ) => {
    const { created_at: _createdAt, created_by: createdBy } = signature;
    const createdAt = formatFunc(new Date(_createdAt), "yyyy-MM-dd");

    return {
      label: createdBy.sigla,
      name: createdBy.name,
      date: createdAt,
    };
  };

  const completedSignatures = withSignature
    ? signatures.completado.map(mapSignature)
    : null;
  const reviewedSignatures = withSignature
    ? signatures.revisado.map(mapSignature)
    : null;

  const iconSize = size === "mini" ? 24 : 48;

  const FileOptions = ({ children }) => {
    if (wrapperWidth >= 620) {
      return <>{children}</>;
    }

    return (
      <>
        <div className={styles.optionsGroup}>{children.slice(0, 2)}</div>
        <div className={styles.optionsGroup}>
          {children.slice(2, children.length)}
        </div>
      </>
    );
  };

  return (
    <div
      className={cx(styles.file, className, size)}
      key={`editor-attached-file-${fileIdx}`}
    >
      <div className={styles.fileIcon}></div>

      <div className={styles.fileDescription}>
        <div className={styles.fileName}>{file["nombre_archivo"] ?? "-"}</div>
        <div
          className={
            wrapperWidth >= 620
              ? styles.fileOptions
              : `${styles.fileOptions} ${styles.lessThan620}`
          }
        ></div>
      </div>
    </div>
  );
}
