
    const defaultCsv = {
      cedulas: `Hora/Día,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
0:00,1,,3,,,1,,1,,,,,,,,,,,,,,,1,1,,,1,,1,
1:00,4,1,5,6,3,,,1,2,2,5,6,,1,1,6,3,3,4,,,3,,2,1,4,,,3,3
2:00,14,13,7,7,14,,,11,8,9,6,11,,3,10,10,14,10,10,,,5,5,6,10,10,,,9,7
3:00,15,8,9,11,11,,,11,9,8,14,17,5,1,9,14,7,12,16,,,3,15,10,6,12,1,,8,11
4:00,9,6,7,7,10,,,13,4,4,7,13,8,1,13,9,9,10,7,4,,4,14,9,9,7,2,,12,4
5:00,12,7,1,8,8,,,6,6,5,7,3,5,,10,12,7,4,14,2,,3,12,11,7,8,3,,6,4
6:00,5,5,2,5,7,1,,4,4,7,8,1,4,1,7,4,7,3,7,3,,6,6,7,6,5,,,5,5
7:00,12,9,74,15,17,1,1,16,19,15,6,18,5,,19,19,19,10,13,2,,12,43,20,26,11,6,,14,16
8:00,1391,17,1790,1415,1369,6,4,1544,1302,1375,1314,1190,15,11,1403,1353,1235,1217,1234,303,13,117,386,1504,1245,14,318,6,1419,1314
9:00,1631,185,1872,1515,1395,10,8,1707,1397,1416,1325,1355,23,15,1548,1372,1325,1339,1221,425,26,,1950,1481,1319,29,383,10,1778,1428
10:00,1650,209,1889,1528,165,24,10,1808,1367,1499,1404,1354,61,16,1540,1529,1336,1304,1310,412,12,,2095,1478,1398,57,448,15,1866,1448
11:00,1209,,1801,1479,2,21,7,1530,1301,1331,1229,1284,43,16,1509,1383,1250,1298,1328,405,7,,1927,1424,1255,55,399,19,1767,1552
12:00,1175,,1291,904,1102,17,14,1345,1020,907,847,958,16,14,967,931,898,931,927,297,5,,1304,1019,994,33,344,9,1200,1104
13:00,1008,,1175,768,1153,8,11,1162,846,788,742,768,6,5,816,868,773,766,743,252,1,,1109,907,853,9,195,4,1041,826
14:00,1274,,1447,1086,1275,5,1,1444,1253,1153,976,1009,,,1108,1096,1045,1051,1000,248,,46,1529,1265,1027,3,180,6,1447,1114
15:00,1520,,1503,1179,1457,2,,1661,1203,1072,959,1090,,,1348,1147,1137,1099,1054,292,,5,1629,1212,766,,137,2,1548,1056
16:00,1047,,1028,723,918,1,,1232,642,602,443,499,1,2,859,595,639,494,537,157,,,947,612,280,1,33,2,1079,524
17:00,72,,81,13,51,,,78,24,24,10,16,,,174,7,14,17,12,1,,,36,11,9,1,,1,260,28
18:00,7,,1,4,2,1,5,4,1,14,1,2,2,,6,2,1,,,,,2,3,,1,,1,1,4,4
19:00,3,,4,3,1,,,2,4,11,1,1,,2,3,1,1,1,,,,2,3,2,1,,,,1,1
20:00,,,3,1,,1,1,2,1,1,1,1,,1,,1,3,,2,1,,,1,2,,,,3,4,2
21:00,2,,1,4,1,,1,5,4,2,4,1,1,2,4,1,1,2,,,,2,4,1,2,2,,1,3,
22:00,3,14,2,2,,,3,2,2,3,1,2,1,3,3,5,2,,,,2,,,2,2,1,,3,,
23:00,,2,1,,,1,2,2,,3,2,,,2,1,2,2,1,,,1,39,,,,,1,1,,2
TOTAL,12064,476,13997,10683,8961,100,68,13591,10419,10251,9312,9599,196,96,11358,10367,9728,9572,9439,2804,67,249,13019,10986,9217,262,2452,83,13475,10453`,
      pasaportes: `Hora/Día,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30
0:00,,,,,,,,,,,1,,,,,,,,,,,,,,,1,,,1,
1:00,9,6,9,9,10,,,10,10,9,10,8,,2,5,5,6,7,5,,,7,9,7,14,8,1,,10,16
2:00,23,19,29,23,27,1,,27,32,29,18,28,,2,18,20,22,23,20,,,13,25,20,27,29,2,,34,27
3:00,30,25,34,29,37,1,,35,19,27,22,30,7,1,23,18,24,27,20,8,,8,22,21,24,33,4,,30,30
4:00,29,31,28,37,39,3,,28,24,26,22,23,9,3,18,23,18,24,27,7,,10,28,14,32,18,7,,23,24
5:00,24,18,33,25,38,3,,26,18,23,23,19,9,3,17,23,12,19,22,3,,9,29,17,26,23,5,,29,22
6:00,17,17,21,15,17,1,,12,14,4,9,6,8,,12,17,9,13,14,8,,8,20,10,14,20,4,,18,12
7:00,29,15,27,22,26,7,,18,29,24,22,21,13,,17,25,28,29,16,4,,21,32,17,31,29,10,2,28,29
8:00,272,35,290,233,252,28,2,291,217,224,227,265,12,17,216,231,197,244,185,143,7,31,289,247,204,56,125,13,290,280
9:00,286,154,342,280,301,26,6,328,262,246,255,251,13,26,288,242,218,213,201,177,7,,313,252,224,52,156,22,291,302
10:00,300,113,344,278,43,30,4,377,286,253,246,249,10,21,303,260,251,239,214,181,7,,313,288,253,54,155,18,297,304
11:00,249,,370,250,6,39,6,315,274,250,239,281,10,25,276,246,224,247,220,177,4,,308,246,275,45,167,9,351,281
12:00,233,,272,204,249,21,5,256,227,191,161,199,8,22,224,198,172,166,154,138,1,,259,179,175,34,116,18,264,219
13:00,146,,174,135,231,18,3,131,163,125,125,159,1,17,126,139,113,125,98,128,,,175,154,112,13,92,5,178,130
14:00,230,,213,188,229,8,,204,189,175,163,176,,,164,182,173,151,187,66,,42,202,176,165,3,78,2,185,199
15:00,232,,245,240,274,12,,262,214,213,173,230,,,239,189,183,164,189,78,,6,248,195,125,1,53,4,267,190
16:00,192,,225,158,252,7,,211,167,144,113,149,,,191,137,107,113,109,45,,3,194,136,80,,34,5,210,91
17:00,34,,13,8,31,,,20,7,6,5,9,1,,64,7,4,5,6,2,,13,15,1,3,,9,3,75,4
18:00,,,,1,6,,,,1,,2,2,,1,1,2,1,1,,,,10,2,,2,,4,2,1,
19:00,,,1,,6,,,2,,,1,1,2,,,1,,,,,,1,,,,1,2,,,
20:00,,,,,,,,,,,,1,1,1,,,,,,,,3,1,,,1,2,,1,
21:00,1,4,,1,,,1,,,,,1,1,1,,,,1,,,,,,,,1,,1,,
22:00,1,1,,,,,,,,,,,,1,,,,,,,,3,2,1,,2,,, ,
23:00,,,,,,,,,,,,,,,,,,,,,,2,1,,,,,, ,
TOTAL,2337,438,2670,2136,2074,205,27,2553,2153,1969,1837,2108,105,143,2202,1965,1762,1811,1687,1165,26,190,2487,1981,1786,424,1026,104,2583,2160`
    };

    const state = {
      cedulas: null,
      pasaportes: null,
      summary: null,
      tableRecords: [],
      sortKey: 'day',
      sortDirection: 'asc',
      pageSize: 10,
      currentPage: 1,
      visibleColumns: { day: true, cedulas: true, pasaportes: true, total: true },
      charts: {},
      themeDark: false,
      lastSource: 'local'
    };

    const elements = {
      currentDate: document.getElementById('currentDate'),
      statusMessage: document.getElementById('statusMessage'),
      kpiCards: document.getElementById('kpiCards'),
      heatmapGrid: document.getElementById('heatmapGrid'),
      aiReport: document.getElementById('aiReport'),
      tableBody: document.getElementById('tableBody'),
      tableSummary: document.getElementById('tableSummary'),
      tablePagination: document.getElementById('tablePagination'),
      tableSearch: document.getElementById('tableSearch'),
      csvLoader: document.getElementById('csvLoader'),
      themeButtons: [document.getElementById('toggleTheme'), document.getElementById('themeToggleFooter')],
      btnLoadCsv: document.getElementById('btnLoadCsv'),
      btnLoadCsvFooter: document.getElementById('btnLoadCsvFooter'),
      btnRefresh: document.getElementById('btnRefresh'),
      btnPrint: document.getElementById('btnPrint'),
      btnExportPdf: document.getElementById('btnExportPdf'),
      btnExportExcel: document.getElementById('btnExportExcel'),
      btnExportCsv: document.getElementById('btnExportCsv'),
      btnDownloadCharts: document.getElementById('btnDownloadCharts')
    };

    const chartConfigs = {
      daily: null,
      compare: null,
      donut: null,
      weekly: null,
      forecast: null,
      ranking: null
    };

    function formatNumber(value) {
      return value.toLocaleString('es-PE');
    }

    function formatPercentage(value) {
      return `${value.toFixed(1)}%`;
    }

    function setStatus(message, type = 'text') {
      elements.statusMessage.textContent = message;
    }

    function parseCsv(text) {
      const parsed = Papa.parse(text.trim(), { delimiter: ',', skipEmptyLines: true });
      const rows = parsed.data.map(row => row.map(cell => (typeof cell === 'string' ? cell.trim() : cell)));
      return rows;
    }

    function prepareDataset(rows) {
      const header = rows[0] || [];
      const totalsRow = rows.find(row => row[0] && row[0].toString().trim().toUpperCase() === 'TOTAL');
      const dayLabels = header.slice(1).map((value, index) => {
        const label = value ? value.toString().trim() : '';
        return label ? `Día ${label}` : `Día ${index + 1}`;
      });
      let dayTotals = [];
      if (totalsRow) {
        dayTotals = totalsRow.slice(1).map(value => Number(value || 0));
      } else {
        const dataRows = rows.slice(1).filter(row => row.length > 1);
        const columns = header.length - 1;
        dayTotals = Array.from({ length: columns }, (_, columnIndex) =>
          dataRows.reduce((sum, row) => sum + Number(row[columnIndex + 1] || 0), 0)
        );
      }
      return { header, dayLabels, dayTotals };
    }

    function computeSummary(cedulasData, pasaportesData) {
      const size = Math.max(cedulasData.dayTotals.length, pasaportesData.dayTotals.length);
      const days = Array.from({ length: size }, (_, i) => `${i + 1}`);
      const cedulaTotals = cedulasData.dayTotals.slice(0, size).map(v => Number(v || 0));
      const pasaporteTotals = pasaportesData.dayTotals.slice(0, size).map(v => Number(v || 0));
      const combinedDaily = days.map((_, index) => (cedulaTotals[index] || 0) + (pasaporteTotals[index] || 0));
      const totalCedulas = cedulaTotals.reduce((sum, v) => sum + v, 0);
      const totalPasaportes = pasaporteTotals.reduce((sum, v) => sum + v, 0);
      const totalEnrollments = totalCedulas + totalPasaportes;
      const avgDaily = totalEnrollments / size || 0;
      const maxDaily = Math.max(...combinedDaily);
      const minDaily = Math.min(...combinedDaily.filter(v => v > 0));
      const today = combinedDaily[size - 1] || 0;
      const yesterday = combinedDaily[size - 2] || 0;
      const variation = today - yesterday;
      const growth = yesterday ? (variation / yesterday) * 100 : 0;
      const percentCedulas = totalEnrollments ? (totalCedulas / totalEnrollments) * 100 : 0;
      const percentPasaportes = totalEnrollments ? (totalPasaportes / totalEnrollments) * 100 : 0;
      const weeklyTotals = [];
      for (let i = 0; i < size; i += 7) {
        weeklyTotals.push(combinedDaily.slice(i, i + 7).reduce((sum, v) => sum + v, 0));
      }
      const cumulativeValues = combinedDaily.reduce((acc, value, index) => {
        acc.push(value + (acc[index - 1] || 0));
        return acc;
      }, []);
      const trend = computeLinearForecast(combinedDaily, 7);
      return {
        days,
        cedulaTotals,
        pasaporteTotals,
        combinedDaily,
        totalCedulas,
        totalPasaportes,
        totalEnrollments,
        avgDaily,
        maxDaily,
        minDaily,
        today,
        yesterday,
        variation,
        growth,
        percentCedulas,
        percentPasaportes,
        weeklyTotals,
        cumulativeValues,
        trend
      };
    }

    function computeLinearForecast(values, horizon) {
      const n = values.length;
      const x = values.map((_, index) => index + 1);
      const y = values;
      const xMean = x.reduce((sum, v) => sum + v, 0) / n;
      const yMean = y.reduce((sum, v) => sum + v, 0) / n;
      let numerator = 0;
      let denominator = 0;
      for (let i = 0; i < n; i++) {
        numerator += (x[i] - xMean) * (y[i] - yMean);
        denominator += Math.pow(x[i] - xMean, 2);
      }
      const slope = denominator ? numerator / denominator : 0;
      const intercept = yMean - slope * xMean;
      return Array.from({ length: horizon }, (_, i) => Math.max(0, Math.round(intercept + slope * (n + i + 1))));
    }

    function renderKpis(summary) {
      const kpis = [
        { icon: 'fa-layer-group', label: 'Total de enrolamientos', value: formatNumber(summary.totalEnrollments), accent: '--accent' },
        { icon: 'fa-id-card', label: 'Total cédulas', value: formatNumber(summary.totalCedulas), accent: '#4f7bf5' },
        { icon: 'fa-passport', label: 'Total pasaportes', value: formatNumber(summary.totalPasaportes), accent: '#38d2ff' },
        { icon: 'fa-chart-simple', label: 'Promedio diario', value: formatNumber(Math.round(summary.avgDaily)), accent: '#00d4a2' },
        { icon: 'fa-arrow-up-right-dots', label: 'Máximo diario', value: formatNumber(summary.maxDaily), accent: '#ffd166' },
        { icon: 'fa-arrow-down-right-dots', label: 'Mínimo diario', value: formatNumber(summary.minDaily), accent: '#ff758f' },
        { icon: 'fa-bolt', label: 'Variación respecto al día anterior', value: `${formatNumber(summary.variation)} (${formatPercentage(summary.growth)})`, accent: '#8d6cff' },
        { icon: 'fa-percent', label: 'Porcentaje de cédulas', value: formatPercentage(summary.percentCedulas), accent: '#4f7bf5' },
        { icon: 'fa-percent', label: 'Porcentaje de pasaportes', value: formatPercentage(summary.percentPasaportes), accent: '#38d2ff' },
        { icon: 'fa-clock', label: 'Última actualización', value: new Date().toLocaleString('es-PE', { dateStyle: 'medium', timeStyle: 'short' }), accent: '#74d2ff' }
      ];
      elements.kpiCards.innerHTML = kpis.map(kpi => `
        <div class="kpi-card">
          <div class="icon" style="background: rgba(255,255,255,0.08); color: ${kpi.accent};"><i class="fas ${kpi.icon}"></i></div>
          <div class="label">${kpi.label}</div>
          <div class="value">${kpi.value}</div>
        </div>
      `).join('');
    }

    function renderHeatmap(summary) {
      const values = summary.combinedDaily;
      const max = Math.max(...values);
      const min = Math.min(...values.filter(v => v > 0));
      elements.heatmapGrid.innerHTML = values.map((value, index) => {
        const ratio = max ? (value - min) / (max - min || 1) : 0;
        const opacity = 0.35 + ratio * 0.55;
        const blue = Math.round(56 + ratio * 120);
        const green = Math.round(130 + ratio * 80);
        const red = Math.round(79 + ratio * 40);
        const bg = `rgba(${red}, ${green}, ${220 - Math.round(ratio * 40)}, ${opacity})`;
        return `
          <div class="heatmap-cell" style="background:${bg};" title="Día ${index + 1}: ${formatNumber(value)} enrolamientos">
            ${index + 1}
          </div>
        `;
      }).join('');
    }

    function renderAiReport(summary) {
      const growth = summary.growth;
      const trend = summary.trend;
      const anomalyValues = detectAnomalies(summary.combinedDaily);
      const stableComparison = summary.totalPasaportes < summary.totalCedulas ? 'Los pasaportes presentan estabilidad relativa con menos fluctuaciones.' : 'Las cédulas muestran mayor volumen y mayor amplitud en la serie temporal.';
      const forecastGain = trend.length ? trend[trend.length - 1] - summary.combinedDaily[summary.combinedDaily.length - 1] : 0;
      const nextDays = trend.map((value, index) => `<strong>Día ${summary.days.length + index + 1}</strong>: ${formatNumber(value)}`).join(', ');
      elements.aiReport.innerHTML = `
        <p><strong>Tendencia general:</strong> El volumen total de enrolamientos alcanzó <strong>${formatNumber(summary.totalEnrollments)}</strong>, con un promedio diario de <strong>${formatNumber(Math.round(summary.avgDaily))}</strong>. La tendencia actual mantiene una trayectoria ${growth >= 0 ? 'positiva' : 'de ajuste'}, con un cambio de <strong>${formatPercentage(growth)}</strong> respecto al día anterior.</p>
        <p><strong>Comportamiento de datos:</strong> Se identifican <strong>${anomalyValues.peaks.length}</strong> picos inusuales y <strong>${anomalyValues.drops.length}</strong> caídas destacadas en el periodo. ${stableComparison}</p>
        <p><strong>Predicción ejecutiva:</strong> El modelo proyecta un promedio cercano a <strong>${formatNumber(Math.round(trend.reduce((a,b) => a + b, 0) / trend.length))}</strong> enrolamientos diarios en los próximos ${trend.length} días. Los valores esperados para los primeros días son: ${nextDays}.</p>
        <p><strong>Recomendaciones:</strong> Incrementar capacidad de atención en los días con mayor demanda, reforzar equipos y logística en los picos identificados, y planificar campañas en días de menor actividad. Mantener monitoreo semanal para ajustar recursos cuando el crecimiento supere <strong>10%</strong>.</p>
      `;
    }

    function detectAnomalies(values) {
      const n = values.length;
      const mean = values.reduce((sum, v) => sum + v, 0) / n;
      const variance = values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) / n;
      const std = Math.sqrt(variance);
      const peaks = [];
      const drops = [];
      values.forEach((value, index) => {
        if (value > mean + std * 1.5) peaks.push(index + 1);
        if (value < mean - std * 1.3) drops.push(index + 1);
      });
      return { peaks, drops };
    }

    function renderChart(canvasId, config) {
      const context = document.getElementById(canvasId).getContext('2d');
      if (chartConfigs[canvasId]) {
        chartConfigs[canvasId].destroy();
      }
      chartConfigs[canvasId] = new Chart(context, config);
      return chartConfigs[canvasId];
    }

    function renderCharts(summary) {
      const labels = summary.days.map(day => `Día ${day}`);
      renderChart('chartDaily', {
        type: 'line',
        data: {
          labels,
          datasets: [
            {
              label: 'Cédulas',
              data: summary.cedulaTotals,
              borderColor: '#4f7bf5',
              backgroundColor: 'rgba(79,123,245,0.15)',
              fill: true,
              tension: 0.32,
              pointRadius: 2
            },
            {
              label: 'Pasaportes',
              data: summary.pasaporteTotals,
              borderColor: '#38d2ff',
              backgroundColor: 'rgba(56,210,255,0.14)',
              fill: true,
              tension: 0.32,
              pointRadius: 2
            },
            {
              label: 'Total',
              data: summary.combinedDaily,
              borderColor: '#7fdbff',
              backgroundColor: 'rgba(127,219,255,0.12)',
              fill: false,
              borderDash: [6, 4],
              tension: 0.25,
              pointRadius: 0
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: { labels: { color: '#cbd5eb' } },
            tooltip: { callbacks: { label: context => `${context.dataset.label}: ${formatNumber(context.parsed.y)}` } }
          },
          scales: {
            x: { ticks: { color: '#aab8d9' }, grid: { color: 'rgba(255,255,255,0.05)' } },
            y: { ticks: { color: '#aab8d9' }, grid: { color: 'rgba(255,255,255,0.05)' } }
          }
        }
      });

      renderChart('chartCompare', {
        type: 'bar',
        data: {
          labels,
          datasets: [
            { label: 'Cédulas', data: summary.cedulaTotals, backgroundColor: '#4f7bf5' },
            { label: 'Pasaportes', data: summary.pasaporteTotals, backgroundColor: '#38d2ff' }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: '#cbd5eb' } },
            tooltip: { callbacks: { label: context => `${context.dataset.label}: ${formatNumber(context.parsed.y)}` } }
          },
          scales: {
            x: { stacked: false, ticks: { color: '#aab8d9' }, grid: { display: false } },
            y: { ticks: { color: '#aab8d9' }, grid: { color: 'rgba(255,255,255,0.05)' } }
          }
        }
      });

      renderChart('chartDonut', {
        type: 'doughnut',
        data: {
          labels: ['Cédulas', 'Pasaportes'],
          datasets: [{ data: [summary.totalCedulas, summary.totalPasaportes], backgroundColor: ['#4f7bf5', '#38d2ff'], hoverOffset: 8 }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { position: 'bottom', labels: { color: '#cbd5eb' } },
            tooltip: { callbacks: { label: context => `${context.label}: ${formatNumber(context.parsed)} (${formatPercentage((context.parsed / summary.totalEnrollments) * 100)})` } }
          }
        }
      });

      renderChart('chartWeekly', {
        type: 'line',
        data: {
          labels: summary.weeklyTotals.map((_, i) => `Semana ${i + 1}`),
          datasets: [{ label: 'Total semanal', data: summary.weeklyTotals, borderColor: '#38d2ff', backgroundColor: 'rgba(56,210,255,0.16)', fill: true, tension: 0.35, pointRadius: 4 }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: '#cbd5eb' } },
            tooltip: { callbacks: { label: context => `${context.dataset.label}: ${formatNumber(context.parsed.y)}` } }
          },
          scales: {
            x: { ticks: { color: '#aab8d9' }, grid: { display: false } },
            y: { ticks: { color: '#aab8d9' }, grid: { color: 'rgba(255,255,255,0.05)' } }
          }
        }
      });

      renderChart('chartForecast', {
        type: 'line',
        data: {
          labels: [...labels, ...summary.trend.map((_, index) => `Pronóstico ${summary.days.length + index + 1}`)],
          datasets: [
            { label: 'Real', data: summary.combinedDaily, borderColor: '#7fdbff', backgroundColor: 'rgba(127,219,255,0.12)', fill: true, tension: 0.32, pointRadius: 2 },
            { label: 'Pronóstico', data: [...Array(summary.combinedDaily.length).fill(null), ...summary.trend], borderColor: '#ffd166', backgroundColor: 'rgba(255,177,70,0.12)', fill: true, borderDash: [5, 5], tension: 0.32, pointRadius: 0 }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          interaction: { mode: 'index', intersect: false },
          plugins: {
            legend: { labels: { color: '#cbd5eb' } },
            tooltip: { callbacks: { label: context => `${context.dataset.label}: ${formatNumber(context.parsed.y)}` } }
          },
          scales: {
            x: { ticks: { color: '#aab8d9' }, grid: { display: false } },
            y: { ticks: { color: '#aab8d9' }, grid: { color: 'rgba(255,255,255,0.05)' } }
          }
        }
      });

      const sortedDays = summary.days
        .map((day, index) => ({ day: Number(day), total: summary.combinedDaily[index] }))
        .sort((a, b) => b.total - a.total)
        .slice(0, 8);

      renderChart('chartRanking', {
        type: 'bar',
        data: {
          labels: sortedDays.map(row => `Día ${row.day}`),
          datasets: [{ label: 'Total', data: sortedDays.map(row => row.total), backgroundColor: '#4f7bf5' }]
        },
        options: {
          indexAxis: 'y',
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: false },
            tooltip: { callbacks: { label: context => `${formatNumber(context.parsed.y)} enrolamientos` } }
          },
          scales: {
            x: { ticks: { color: '#aab8d9' }, grid: { color: 'rgba(255,255,255,0.05)' }, beginAtZero: true },
            y: { ticks: { color: '#aab8d9' }, grid: { display: false } }
          }
        }
      });
    }

    function refreshTable(summary) {
      const searchText = elements.tableSearch.value.trim().toLowerCase();
      const records = summary.days.map((day, index) => ({
        day: day,
        cedulas: summary.cedulaTotals[index] || 0,
        pasaportes: summary.pasaporteTotals[index] || 0,
        total: summary.combinedDaily[index] || 0
      }));
      state.tableRecords = records.filter(record => {
        if (!searchText) return true;
        return Object.values(record).some(value => value.toString().toLowerCase().includes(searchText));
      });
      state.currentPage = 1;
      renderTable();
    }

    function renderTable() {
      const records = [...state.tableRecords];
      records.sort((a, b) => {
        const valueA = a[state.sortKey];
        const valueB = b[state.sortKey];
        if (typeof valueA === 'number' && typeof valueB === 'number') return state.sortDirection === 'asc' ? valueA - valueB : valueB - valueA;
        return state.sortDirection === 'asc' ? valueA.localeCompare(valueB) : valueB.localeCompare(valueA);
      });
      const pageCount = Math.max(1, Math.ceil(records.length / state.pageSize));
      if (state.currentPage > pageCount) state.currentPage = pageCount;
      const start = (state.currentPage - 1) * state.pageSize;
      const paginated = records.slice(start, start + state.pageSize);
      elements.tableBody.innerHTML = paginated.length ? paginated.map(row => `
        <tr>
          ${state.visibleColumns.day ? `<td>${row.day}</td>` : ''}
          ${state.visibleColumns.cedulas ? `<td>${formatNumber(row.cedulas)}</td>` : ''}
          ${state.visibleColumns.pasaportes ? `<td>${formatNumber(row.pasaportes)}</td>` : ''}
          ${state.visibleColumns.total ? `<td>${formatNumber(row.total)}</td>` : ''}
        </tr>
      `).join('') : `<tr><td colspan="4" class="text-center text-muted">No hay registros para mostrar</td></tr>`;
      elements.tableSummary.textContent = `Mostrando ${paginated.length} de ${records.length} registros`;
      renderPagination(pageCount);
      toggleTableColumns();
    }

    function renderPagination(pageCount) {
      elements.tablePagination.innerHTML = '';
      for (let page = 1; page <= pageCount; page++) {
        const active = page === state.currentPage ? 'active' : '';
        elements.tablePagination.insertAdjacentHTML('beforeend', `<li class="page-item ${active}"><button class="page-link btn btn-soft btn-sm" data-page="${page}">${page}</button></li>`);
      }
      elements.tablePagination.querySelectorAll('button[data-page]').forEach(button => {
        button.addEventListener('click', () => {
          state.currentPage = Number(button.dataset.page);
          renderTable();
        });
      });
    }

    function toggleTableColumns() {
      document.querySelectorAll('#dataTable th').forEach(th => {
        const key = th.dataset.key;
        th.style.display = state.visibleColumns[key] ? '' : 'none';
      });
      document.querySelectorAll('#dataTable td').forEach(td => {
        const columnIndex = Array.from(td.parentElement.children).indexOf(td);
        const visibleKeys = Object.keys(state.visibleColumns).filter(key => state.visibleColumns[key]);
        const currentKey = visibleKeys[columnIndex];
        if (!currentKey) return;
        td.style.display = state.visibleColumns[currentKey] ? '' : 'none';
      });
    }

    function downloadCsv() {
      const headers = Object.keys(state.visibleColumns).filter(key => state.visibleColumns[key]);
      const content = [headers.map(key => ({ day: 'Día', cedulas: 'Cédulas', pasaportes: 'Pasaportes', total: 'Total' }[key] || key))];
      state.tableRecords.forEach(record => {
        content.push(headers.map(key => record[key]));
      });
      const csv = content.map(row => row.map(cell => `"${cell}"`).join(',')).join('\n');
      const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'enrolamientos_resumen.csv';
      link.click();
    }

    function downloadExcel() {
      const headers = Object.keys(state.visibleColumns).filter(key => state.visibleColumns[key]);
      const worksheet = XLSX.utils.json_to_sheet(state.tableRecords.map(record => {
        const row = {};
        headers.forEach(key => {
          row[{ day: 'Día', cedulas: 'Cédulas', pasaportes: 'Pasaportes', total: 'Total' }[key] || key] = record[key];
        });
        return row;
      }));
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Resumen');
      XLSX.writeFile(workbook, 'enrolamientos_resumen.xlsx');
    }

    function printDashboard() {
      window.print();
    }

    async function exportPdf() {
      const container = document.querySelector('.main-panel');
      const canvas = await html2canvas(container, { scale: 2, useCORS: true, backgroundColor: '#0b172a' });
      const imageData = canvas.toDataURL('image/jpeg', 0.95);
      const pdf = new jspdf.jsPDF('landscape', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const imgProps = pdf.getImageProperties(imageData);
      const imgWidth = pageWidth;
      const imgHeight = (imgProps.height * pageWidth) / imgProps.width;
      pdf.addImage(imageData, 'JPEG', 0, 0, imgWidth, Math.min(imgHeight, pageHeight));
      pdf.save('dashboard_enrolamiento.pdf');
    }

    function downloadAllCharts() {
      Object.entries(chartConfigs).forEach(([id, chart]) => {
        if (!chart) return;
        const link = document.createElement('a');
        link.href = chart.toBase64Image();
        link.download = `${id}_enrolamientos.png`;
        link.click();
      });
    }

    async function loadDefaultData() {
      showLoading('Cargando datos del dashboard...');
      try {
        const [cedulasResponse, pasaportesResponse] = await Promise.all([
          fetch('./Cedulas.csv'),
          fetch('./Pasaportes.csv')
        ]);
        if (!cedulasResponse.ok || !pasaportesResponse.ok) throw new Error('No se pudo cargar CSV local');
        const [cedulasText, pasaportesText] = await Promise.all([cedulasResponse.text(), pasaportesResponse.text()]);
        applyCsvData('cedulas', cedulasText);
        applyCsvData('pasaportes', pasaportesText);
        state.lastSource = 'archivos';
        setStatus('Datos cargados automáticamente desde Cedulas.csv y Pasaportes.csv.');
      } catch (error) {
        applyCsvData('cedulas', defaultCsv.cedulas);
        applyCsvData('pasaportes', defaultCsv.pasaportes);
        state.lastSource = 'embebido';
        setStatus('Datos embebidos cargados. Use el botón Cargar CSV para actualizar manualmente.');
      }
      refreshDashboard();
      hideLoading();
    }

    function applyCsvData(type, text) {
      const rows = parseCsv(text);
      const dataset = prepareDataset(rows);
      if (type === 'cedulas') state.cedulas = dataset;
      if (type === 'pasaportes') state.pasaportes = dataset;
    }

    function showLoading(message = 'Cargando...') {
      const overlay = document.getElementById('loadingOverlay');
      const text = document.getElementById('loadingText');
      overlay.classList.add('active');
      text.textContent = message;
    }

    function hideLoading() {
      document.getElementById('loadingOverlay').classList.remove('active');
    }

    function refreshDashboard() {
      if (!state.cedulas || !state.pasaportes) return;
      state.summary = computeSummary(state.cedulas, state.pasaportes);
      renderKpis(state.summary);
      renderHeatmap(state.summary);
      renderAiReport(state.summary);
      renderCharts(state.summary);
      refreshTable(state.summary);
    }
    function handleFileUpload(files) {
      const fileArray = Array.from(files);
      if (fileArray.length === 0) return;
      showLoading('Procesando archivos CSV...');
      const promises = fileArray.map(file => file.text().then(text => ({ name: file.name, lowercase: file.name.toLowerCase(), text })));
      Promise.all(promises).then(filesLoaded => {
        let updated = 0;
        filesLoaded.forEach(file => {
          const normalizedName = file.lowercase.normalize('NFD').replace(/[̀-ͯ]/g, "");
          if (/cedul/i.test(normalizedName)) {
            applyCsvData('cedulas', file.text);
            updated += 1;
          } else if (/pasaport/i.test(normalizedName)) {
            applyCsvData('pasaportes', file.text);
            updated += 1;
          } else if (file.text.toLowerCase().includes('hora/día') && file.text.toLowerCase().includes('total')) {
            if (!state.cedulas) { applyCsvData('cedulas', file.text); updated += 1; }
            else if (!state.pasaportes) { applyCsvData('pasaportes', file.text); updated += 1; }
          }
        });
        if (updated === 0) {
          setStatus('Archivos no identificados. Seleccione Cedulas.csv y Pasaportes.csv.');
          hideLoading();
          return;
        }
        refreshDashboard();
        setStatus('Datos actualizados correctamente desde los archivos cargados.');
        hideLoading();
      }).catch(() => {
        setStatus('Error leyendo los archivos. Intente nuevamente con CSV válidos.');
        hideLoading();
      });
    }

    function addEventListeners() {
      elements.csvLoader.addEventListener('change', event => {
        handleFileUpload(event.target.files);
        event.target.value = '';
      });
      [elements.btnLoadCsv, elements.btnLoadCsvFooter].forEach(button => {
        button.addEventListener('click', () => elements.csvLoader.click());
      });
      elements.btnRefresh.addEventListener('click', refreshDashboard);
      elements.btnPrint.addEventListener('click', printDashboard);
      elements.btnExportPdf.addEventListener('click', exportPdf);
      elements.btnExportExcel.addEventListener('click', downloadExcel);
      elements.btnExportCsv.addEventListener('click', downloadCsv);
      elements.btnDownloadCharts.addEventListener('click', downloadAllCharts);
      elements.tableSearch.addEventListener('input', () => refreshTable(state.summary));
      document.querySelectorAll('.column-toggle').forEach(input => {
        input.addEventListener('change', event => {
          state.visibleColumns[event.target.value] = event.target.checked;
          renderTable();
        });
      });
      document.querySelectorAll('#dataTable th').forEach(th => {
        th.addEventListener('click', () => {
          const key = th.dataset.key;
          if (!key) return;
          if (state.sortKey === key) {
            state.sortDirection = state.sortDirection === 'asc' ? 'desc' : 'asc';
          } else {
            state.sortKey = key;
            state.sortDirection = 'asc';
          }
          renderTable();
        });
      });
      elements.themeButtons.forEach(button => {
        button.addEventListener('click', toggleTheme);
      });
      setInterval(() => {
        elements.currentDate.textContent = new Date().toLocaleString('es-PE', { dateStyle: 'medium', timeStyle: 'short' });
      }, 1000);
    }

    function toggleTheme() {
      state.themeDark = !state.themeDark;
      document.body.classList.toggle('dark-mode', state.themeDark);
      elements.themeButtons.forEach(button => button.innerHTML = `<i class="fas fa-${state.themeDark ? 'sun' : 'moon'}"></i> Alternar Modo ${state.themeDark ? 'Claro' : 'Oscuro'}`);
    }

    document.addEventListener('DOMContentLoaded', () => {
      addEventListeners();
      loadDefaultData();
    });
  