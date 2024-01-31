import React, { useRef, useEffect, useState } from "react";
import { CKEditor } from "ckeditor4-react";
import { Height } from "@mui/icons-material";
import FileIcon from "@/Icons/FileIcon";
import TrashIcon from "@/Icons/TrashIcon";

/**
 * Componente `CustomTextArea` para la creación de áreas de texto personalizadas con el editor CKEditor.
 *
 * Este componente permite la edición de texto enriquecido mediante el editor CKEditor.
 *
 * @component
 *
 * @param {Object} props - Propiedades del componente.
 * @param {string} [props.type="inline"] - Tipo de CKEditor (por defecto, "inline").
 * @param {string} [props.initialValue] - Valor inicial del área de texto.
 * @param {boolean} [props.border] - Indica si debe haber un borde alrededor del área de texto.
 * @param {number} [props.height=70] - Altura predeterminada del área de texto.
 * @param {number} [props.maxHeight=70] - Altura máxima permitida del área de texto.
 * @param {boolean} [props.disabled=false] - Indica si el área de texto debe estar desactivada.
 * @param {Function} [props.onDataChange=() => {}] - Función que se ejecuta cuando cambia el contenido del área de texto.
 * @param {Function} [props.onInstanceReady=null] - Función que se ejecuta cuando el editor CKEditor está listo.
 * @param {Function} [props.onLoad=null] - Función que se ejecuta cuando se carga el área de texto.
 * @returns {React.ReactNode} React Component.
 */

function isIntegrationKeyValid(
  integrationKey = {
    modelId: "",
    fieldId: "",
  }
) {
  try {
    if (
      typeof integrationKey.modelId !== "string" ||
      integrationKey.modelId === ""
    ) {
      return false;
    }

    return !(
      typeof integrationKey.fieldId !== "string" ||
      integrationKey.fieldId === ""
    );
  } catch {
    return false;
  }
}

export function getFileSize(fileSizeInBytes = 0) {
  let fileSize = fileSizeInBytes / 1024;
  let fileSizePrefix = "KB";

  if (fileSize > 1000.0) {
    fileSize /= 1024;
    fileSizePrefix = "MB";
  }

  if (fileSize > 1000.0) {
    fileSize /= 1024;
    fileSizePrefix = "GB";
  }

  return {
    size: Math.floor(fileSize * 100) / 100.0,
    prefix: fileSizePrefix,
  };
}

export function readableFileSize(fileSizeInBytes = 0) {
  const fileSize = getFileSize(fileSizeInBytes);

  return `${fileSize.size}${fileSize.prefix}`;
}

const CustomTextArea = ({
  type = "inline",
  initialValue,
  border,
  borderRadius,
  height = 100,
  maxHeight = 100,
  disabled = false,
  onDataChange = () => {},
  onInstanceReady = null,
  onLoad = null,
}) => {
  const editorRef = useRef();
  const [data, setData] = useState(initialValue);
  const [isInstanceLoaded, setIsInstanceLoaded] = useState(false);
  const [editorAttachments, setEditorAttachments] = useState([]);
  const handleInstanceReady = ({ editor }) => {
    editorRef.current = { editor, element: editor.container.$ };
    setIsInstanceLoaded(true);
    if (typeof onInstanceReady == "function") {
      onInstanceReady();
    }
  };

  useEffect(() => {
    setData(initialValue);
  }, [initialValue]);

  const onDataChangeHandler = (event) => {
    const plainText = event.editor.element.getText();
    const _data = event.editor.getData();
    setData(_data);

    onDataChange({
      html: _data,
      plain: plainText,
    });
  };

  const makeOnLoad = () => {
    if (typeof onLoad === "function") {
      return onLoad;
    }

    return null;
  };

  const onLoadHandler = makeOnLoad();

  const onClickWrapper = function () {
    if (
      editorRef.current !== null &&
      typeof editorRef.current.editor !== "undefined"
    ) {
      editorRef.current.editor.focus();
    }
  };

  const handleDeleteAttachment = (index) => {
    setEditorAttachments((prevAttachments) => {
      const newAttachments = [...prevAttachments];
      newAttachments.splice(index, 1);
      return newAttachments;
    });
  };

  const renderFiles = () => {
    if (editorAttachments === null || editorAttachments.length === 0) {
      return null;
    }

    return editorAttachments.map((file, idx) => {
      console.log(file, "file");
      let icon;

      switch (file.type) {
        case "image/png":
          icon = "📷"; // Coloca aquí el icono para imágenes
          break;
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
          icon = "📄"; // Coloca aquí el icono para documentos
          break;
        default:
          icon = "📎"; // Icono predeterminado para otros tipos
      }

      return (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            border: "1px solid #008289",
            margin: 5,
            borderRadius: 8,
            padding: 5,
            position: "relative",
            zIndex: 99999,
          }}
        >
          <div
            style={{
              zoom: 1.6,
              margin: "auto 5px",
              border: "1px solid #A6D04F",
              borderRadius: 4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              padding: 2,
              cursor: "pointer",
            }}
            title="Descargar"
          >
            <FileIcon />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              key={idx}
              style={{
                color: "#008289",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              title="Descargar"
            >
              {file.name}
            </div>
            <div key={idx}>{readableFileSize(file.size ?? 0)}</div>
          </div>
          <div
            style={{
              margin: "auto 5px auto auto",
              zoom: 1.3,
              cursor: "pointer",
            }}
            title="Eliminar"
          >
            <TrashIcon onClick={() => handleDeleteAttachment(idx)} />
          </div>
        </div>
      );
    });
  };

  const handleAttachmentUpload = async ({ attachedFiles }) => {
    // Tu lógica de carga de attachments aquí

    setTimeout(() => {
      console.log("uploaded", attachedFiles);
    });

    // Simulando una carga con un nuevo attachment

    if (true) {
      setEditorAttachments((prevAttachments) => [
        ...prevAttachments,
        ...attachedFiles,
      ]);
    }
  };

  return (
    <div
      className="ui segment basic"
      style={{
        border: border ? border : "none",
        borderRadius: borderRadius ? borderRadius : "none",
        padding: 6,
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        height: height,
        maxHeight: maxHeight,
        cursor: "text",
      }}
      onClick={onClickWrapper}
    >
      {!isInstanceLoaded && !disabled && onLoadHandler === null ? (
        <div className="ui dimmer inverted active">
          <div className="ui text loader">{"Cargando..."}</div>
        </div>
      ) : null}
      {disabled ? (
        <ErrorBoundary>
          <div dangerouslySetInnerHTML={{ __html: data }}></div>
        </ErrorBoundary>
      ) : (
        <CKEditor
          ref={editorRef}
          type={type}
          initData={data}
          readOnly={disabled}
          onChange={onDataChangeHandler}
          onInstanceReady={handleInstanceReady}
          style={{ outline: "none" }}
          editorUrl={"/ckeditor4/ckeditor.js"}
          config={{
            toolbar: [
              {
                name: "basicstyles",
                groups: ["basicstyles", "cleanup"],
                items: ["Bold", "Italic"],
              },
              {
                name: "paragraph",
                groups: ["list", "indent", "blocks", "align", "bidi"],
                items: [
                  "NumberedList",
                  "BulletedList",
                  "-",
                  "Outdent",
                  "Indent",
                  "-",
                  "TextColor",
                ],
              },
              {
                name: "links",
                items: ["Link", "Attachments"],
              },
              {
                name: "insert",
                items: ["Table", "SpecialChar"],
              },
              {
                name: "tools",
                items: ["Maximize"],
              },
              {
                name: "basicstyles",
                items: ["Bold", "Italic", "Underline", "-", "RemoveFormat"],
              },
              {
                name: "paragraph",
                items: [
                  "NumberedList",
                  "BulletedList",
                  "-",
                  "Outdent",
                  "Indent",
                  "-",
                  "JustifyLeft",
                  "JustifyCenter",
                  "JustifyRight",
                  "JustifyBlock",
                  "-",
                  "TextColor",
                ],
              },
              {
                name: "styles",
                items: ["Styles", "Format"],
              },
            ],
            title: false,
            autoParagraph: false,
            enterMode: 2,
            removePlugins: "elementspath",
            extraPlugins:
              "uploadimage,pastebase64,openlink,attach,justify,colorbutton,pastefromexcel,colordialog,pasolink",
            language: "es",
            openlink_modifier: 0,
            uploadUrl: "",
            onAttachmentUpload: handleAttachmentUpload,
            onAttachmentFailure: async () => {
              setTimeout(() => {
                console.log("failed");
              });
            },
          }}
        />
      )}
      {renderFiles()}
    </div>
  );
};

export default CustomTextArea;
