import { useCallback, RefObject } from "react";
import { toPng } from "html-to-image";

interface Props {
  innerRef: RefObject<HTMLDivElement>;
  date: string;
}

const DonwloadHtml = ({ innerRef, date }: Props) => {
  const ref = innerRef;
  console.log(date);

  const onButtonClick = useCallback(() => {
    if (ref.current === null) {
      return;
    }

    toPng(ref.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `collageboxd-${date}.png`;
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
