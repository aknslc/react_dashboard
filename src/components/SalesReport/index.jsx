import React,{useState} from 'react'
import ChartComp from '../ChartComp'
import styles from './salesreport.module.scss'
import { SalesData } from '../../constant'

const SalesReport = () => {
    const [salesData, setSalesData] = useState({
        labels: SalesData.map((data) => data.year),
        datasets: [
          {
            label: "Earned Money",
            data: SalesData.map((data) => data.gain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "gray",
            borderWidth: 1,
          },
        ],
      });
    return (
        <div className={`${styles.salesReport} col-lg-6 col-md-12 col-sm-12`}>
            <h2>Sales Report</h2>
            <ChartComp chartData={salesData} />
        </div>
    )
}

export default SalesReport