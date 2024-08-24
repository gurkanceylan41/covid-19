import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getData from "../../redux/action";
import Heading from "./Heading";
import { useSearchParams } from "react-router-dom";
import Content from "./Content";

const Detail = () => {
  // urldeki arama parametresini al
  const [params] = useSearchParams();
  const code = params.get("code");

  // dispatch kurulum
  const dispatch = useDispatch();

  // Asenkron işlemleri tetikler
  const sendAction = () => dispatch(getData({ code }));

  useEffect(() => {
    sendAction();
  }, []);

  return (
    <div className="min-h-[calc(100vh-74px)] text-white grid place-items-center p-6">
      <div className="min-h-[80vh] bg-white p-8 rounded-lg shodow-lg max-w-3xl max-md:w-full md:min-w-[500px] ">
        {/* Üst Kısım */}
        <Heading />

        {/* Alt Kısım */}
        <Content retry={sendAction} />
      </div>
    </div>
  );
};

export default Detail;
