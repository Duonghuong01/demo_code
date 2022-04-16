import {
  BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,
  Tooltip
} from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import DatePicker from "react-multi-date-picker";
import { useDispatch } from 'react-redux';
import { getDashboardOrderByRenevueThunk } from '../../redux/dashboardSlice';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default () => {

  const [year, setYear] = useState(new Date());
  const [labels, setLabels] = useState([]);
  const [dataAmount, setDataAmount] = useState([]);
  let dispatch = useDispatch();
  const search = async () => {
    if (year.year) {
      let resp = await dispatch(getDashboardOrderByRenevueThunk(year.year));
      if (resp) {
        let respLabels = [];
        let respData = [];
        resp[0].forEach(item => {
          respLabels.push(item.label)
          respData.push(item.revenue)
        })
        setLabels(respLabels)
        setDataAmount(respData)
      }
    } else {
      let date = new Date();
      let resp = await dispatch(getDashboardOrderByRenevueThunk(date.getFullYear()));
      if (resp) {
        let respLabels = [];
        let respData = [];
        resp[0].forEach(item => {
          respLabels.push(item.label)
          respData.push(item.revenue)
        })
        setLabels(respLabels)
        setDataAmount(respData)
      }
    }

  }
  useEffect(() => {
    search()
  }, [year])

  const data = {
    labels,
    datasets: [{
      label: 'Thống kê đơn hàng theo doanh thu',
      backgroundColor: 'rgb(46, 54, 80)',
      borderColor: 'rgb(255, 99, 132)',
      data: dataAmount,
    }]
  };

  return (
    <>
      <div>
        <DatePicker onChange={(value) => setYear(value)} value={year}
          onlyYearPicker
          format='YYYY'
        />
      </div>
      <Bar
        data={data}
      />
    </>
  )
}