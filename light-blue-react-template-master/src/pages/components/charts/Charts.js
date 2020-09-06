import React from 'react';

import {
  Row, Col, Card, CardBody
} from 'reactstrap';

import Widget from '../../../components/Widget';
import ApexChart from 'react-apexcharts';

import s from './Charts.module.scss';
import {chartData, liveChart, liveChartInterval} from './mock';
import Sparklines from '../../../components/Sparklines';

import ReactEchartsCore from 'echarts-for-react/lib/core';

import echarts from 'echarts/lib/echarts';

import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/chart/themeRiver';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/legend';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official'
import exporting from 'highcharts/modules/exporting';
import exportData from 'highcharts/modules/export-data';
import Map from '../../dashboard/components/maps/google/Google';

exporting(Highcharts);
exportData(Highcharts);


class Charts extends React.Component {



  render() {

    return (
      <div className={s.root}>
  <h1 className="page-title">Dashboard <span className="fw-bold">Map</span></h1>
  <br />
  <br />
  <br />


        <br />
        <div>
        <Row>
        <Map />
        </Row>

        </div>
      </div>
    );
  }

}

export default Charts;
