import { useCallback, RefObject } from "react";
import { toPng } from "html-to-image";

interface Props {
  innerRef: RefObject<HTMLDivElement>;
}

const DonwloadHtml = ({ innerRef }: Props) => {
  const ref = innerRef;

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, {
      cacheBust: true,
      backgroundColor: "#14181c",
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `collageboxd.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [ref]);

  return (
    <div className="flex-button">
      <button className="button-download" onClick={onButtonClick}>
        Download
      </button>
    </div>
  );
};

export default DonwloadHtml;
