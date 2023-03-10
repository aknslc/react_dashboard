import React from 'react'
import styles from './chartcomp.module.scss'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from "chart.js/auto";

const ChartComp = ({ chartData }) => {

  return (
    <div className={styles.chartCompContainer}>
      <Bar
        data={chartData}

        options={
          {
            maintainAspectRatio: false,
            responsive: true
          }
        }
      />
    </div>
  )
}

export default ChartComp