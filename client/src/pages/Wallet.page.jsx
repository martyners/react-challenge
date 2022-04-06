import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import { LedgerWidget, Page } from 'ui';
import { SummaryService } from '../api/services/SummaryService';
import { BudgetService } from '../api/services/BudgetService';


import { PieChart, Pie, Label, LabelList, Cell, Tooltip, Legend, CartesianGrid, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

export function WalletPage() {
  const [summary, setSummary] = useState([]);
  const [budget, setBudget] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [barData, setBarData] = useState([]);
  const [balance, setBalance] = useState();

  useEffect(() => {
    retrieveData()
  }, []);

  async function retrieveData() {
    let pieArray = [];
    let barArray = [];

    SummaryService.findAll()
      .then(result => {
        result.spending.map(e => {

          pieArray.push({
            name: e.categoryName,
            value: e.amountInCents,
            fill: e.categoryColor,
          })
        })

        let balance = result.balance.toFixed(2);
        setBalance(balance);
        console.log(pieArray);
        console.log(balance);
        result && setSummary(result);
      })
      .catch(() => {

      })
      .finally(() => {
        // setLoading(false);
        // console.log(mydata);
        setChartData(pieArray);
      });

    BudgetService.findAll()
      .then(result => {
        result.map(e => {
          barArray.push({
            name: e.category.name + " %",
            value: e.currentSpendingPercent,
            fill: e.category.color,
          })
        })
        console.log(barArray);

        result && setBudget(result);
      })
      .catch(() => {

      })
      .finally(() => {
        //setLoading(false);
        setBarData(barArray);
      });
  }
  return (

    <Page title={'Portfel'}>
      <Grid container spacing={{ xs: 3, md: 6 }}>
        <Grid item xs={12} md={8}>
          <LedgerWidget />
        </Grid>
        <Grid container item xs={12} md={4} spacing={3}>
          <Grid item xs={12}>

            <h2> Saldo {balance} PLN</h2>

            <p>Pozostała kwota</p>
            {
              chartData && chartData.length > 0 ?
                (<PieChart width={630} height={310} >
                  <Pie data={chartData} startAngle={-90} dataKey="value" nameKey="name" fill="fill" cx="30%" cy="25%" isAnimationActive={false} innerRadius={45} outerRadius={80} paddingAngle={-1} />
                  <Legend layout="vetical" verticalAlign="bottom" align="center" iconType="circle" />
                  <Tooltip />
                </PieChart>) : "Brak wyników"
            }
          </Grid>
          <Grid item xs={12}>
            <h2> Budżet </h2>
            <p>Podsumowanie wydatków</p>
            {/*  TODO in task 5 */


              barData && barData.length > 0 ? (<BarChart width={630} height={300} data={barData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis type="category" width={250} dataKey="name" />
                <Bar
                  dataKey="value"
                />
                <Tooltip />
              </BarChart>) : "Brak wyników"
            }
          </Grid>

        </Grid>
      </Grid>
    </Page>
  );
}