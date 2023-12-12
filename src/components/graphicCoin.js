import React, { useEffect } from "react";
import debounce from "../helpers/debounce";
import { useDispatch, useSelector } from "react-redux";
import { fetchCoinsPrices } from "../store/coinsPrices";
import { useParams } from "react-router-dom";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function GraphicCoin() {
  const dispatch = useDispatch();
  const graphicCoin = useSelector((state) => state.graphicCoin);
  const { id } = useParams();


  useEffect(() => {
    const fetchCoinsWithDebounce = debounce(() => {
      dispatch(fetchCoinsPrices(id)); 
    }, 2000);
    fetchCoinsWithDebounce();
  }, [id, dispatch]);



  if (!graphicCoin) {
    return null;
  }

  return (
<ResponsiveContainer width="100%" height={400}>
      <AreaChart
        data={graphicCoin}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
    </ResponsiveContainer>
  );
}

export default GraphicCoin;
