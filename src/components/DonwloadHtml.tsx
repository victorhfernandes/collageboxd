import { useCallback, RefObject } from "react";
import { toPng } from "html-to-image";
import { IS_SAFARI } from "../utils";

interface Props {
  innerRef: RefObject<HTMLDivElement>;
  user: string;
  period: string;
  year: string;
}

const DonwloadHtml = ({ innerRef, user, period, year }: Props) => {
  const ref = innerRef;

  const onButtonClick = useCallback(async () => {
    if (ref.current === null) {
      return;
    }

    if (IS_SAFARI) {
      for (let i = 0; i < 4; i++) {
        await toPng(ref.current, {
          cacheBust: true,
          backgroundColor: "#14181c",
          canvasWidth: ref.current.offsetWidth * 2,
          canvasHeight: ref.current.offsetHeight * 2,
        });
      }
    }

    const dataUrl = await toPng(ref.current, {
      cacheBust: true,
      backgroundColor: "#14181c",
      canvasWidth: ref.current.offsetWidth * 2,
      canvasHeight: ref.current.offsetHeight * 2,
    });
    try {
      const link = document.createElement("a");
      link.download = `collageboxd-${user.trim()}-${period}-${year}.png`;
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.log(err);
    }

    /*
    toPng(ref.current, {
      cacheBust: true,
      backgroundColor: "#14181c",
      canvasWidth: ref.current.offsetWidth * 2,
      canvasHeight: ref.current.offsetHeight * 2,
    })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `collageboxd-${user.trim()}-${period}-${year}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });*/
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
