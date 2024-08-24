import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../utils/api";
import axios from "axios";

const getData = createAsyncThunk("covid/getData", async ({ code }) => {
  // api'a gönderilicek parametreleri belirle
  const params = { iso: code };

  //isoCode göre covid  verilerini al
  const req1 = api.get("/reports", { params });

  //isoCode göre ülke  verilerini al
  const req2 = axios.get(`https://restcountries.com/v3.1/alpha/${code}`);

  // Her iki api isteğini paralel olarak gönder
  const responses = await Promise.all([req1, req2]);

  // region nesnesindeki değerleri bir üst nesneye taşı
  const covid = {
    ...responses[0].data.data[0],
    ...responses[0].data.data[0].region,
  };

  // Gereksiz değerli kaldır
  delete covid.region;
  delete covid.cities;

  // aksiyonun payload'ı olacak veriyi return et
  return { covid, country: responses[1].data[0] };
});

export default getData;
