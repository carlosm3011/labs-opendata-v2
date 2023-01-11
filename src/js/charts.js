Highcharts.chart('chart1', {
	chart: {
		type: 'areaspline'
	},
	title: {
		text: 'Moose and Deer Hunting in Norway',
		align: 'left'
	},
	subtitle: {
		align: 'center',
		text: 'Source: <a href="https://www.ssb.no/jord-skog-jakt-og-fiskeri/jakt" target="_blank">SSB</a>'
	},
	legend: {
		layout: 'vertical',
		align: 'left',
		verticalAlign: 'top',
		x: 120,
		y: 70,
		floating: true,
		borderWidth: 1,
		backgroundColor:
		Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
	},
	xAxis: {
		plotBands: [{ // Highlight the two last years
			from: 2019,
			to: 2020,
			color: 'rgba(68, 170, 213, .2)'
		}]
	},
	yAxis: {
		title: {
			text: 'Quantity'
		}
	},
	tooltip: {
		shared: true,
		headerFormat: '<b>Hunting season starting autumn {point.x}</b><br>'
	},
	plotOptions: {
		series: {
			pointStart: 2000
		},
		areaspline: {
			fillOpacity: 0.5
		}
	},
	series: [{
		name: 'Moose',
		data:
		[
			38000,
			37300,
			37892,
			38564,
			36770,
			36026,
			34978,
			35657,
			35620,
			35971,
			36409,
			36435,
			34643,
			34956,
			33199,
			31136,
			30835,
			31611,
			30666,
			30319,
			31766
		]
	}, {
		name: 'Deer',
		data:
		[
			22534,
			23599,
			24533,
			25195,
			25896,
			27635,
			29173,
			32646,
			35686,
			37709,
			39143,
			36829,
			35031,
			36202,
			35140,
			33718,
			37773,
			42556,
			43820,
			46445,
			50048
		]
	}]
});

Highcharts.chart('chart2', {
	chart: {
		plotBackgroundColor: null,
		plotBorderWidth: null,
		plotShadow: false,
		type: 'pie'
	},
	title: {
		text: 'Browser Market Shares',
		align: 'left'
	},
	tooltip: {
		pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
	},
	accessibility: {
		point: {
			valueSuffix: '%'
		}
	},
	plotOptions: {
		pie: {
			allowPointSelect: true,
			cursor: 'pointer',
			dataLabels: {
				enabled: true,
				format: '<b>{point.name}</b>: {point.percentage:.1f} %'
			}
		}
	},
	series: [{
		name: 'Brands',
		colorByPoint: true,
		data: [{
			name: 'Chrome',
			y: 70.67,
			sliced: true,
			selected: true
		}, {
			name: 'Edge',
			y: 14.77
		},  {
			name: 'Firefox',
			y: 4.86
		}, {
			name: 'Safari',
			y: 2.63
		}, {
			name: 'Internet Explorer',
			y: 1.53
		},  {
			name: 'Opera',
			y: 1.40
		}, {
			name: 'Sogou Explorer',
			y: 0.84
		}, {
			name: 'QQ',
			y: 0.51
		}, {
			name: 'Other',
			y: 2.6
		}]
	}]
});

Highcharts.chart('chart3', {
    chart: {
        type: 'area',
        options3d: {
            enabled: true,
            alpha: 15,
            beta: 30,
            depth: 200
        }
    },
    title: {
		text: 'Visual Comparison of Mountains Panorama',
		align: 'left'
    },
    accessibility: {
        description: 'The chart is showing the shapes of three mountain ranges as three area line series laid out in 3D behind each other.',
        keyboardNavigation: {
            seriesNavigation: {
                mode: 'serialize'
            }
        }
    },
    lang: {
        accessibility: {
            axis: {
                xAxisDescriptionPlural: 'The chart has 3 unlabelled X axes, one for each series.'
            }
        }
    },
    yAxis: {
        title: {
            text: 'Height Above Sea Level',
            x: -40
        },
        labels: {
            format: '{value:,.0f} MAMSL'
        },
        gridLineDashStyle: 'Dash'
    },
    xAxis: [{
        visible: false
    }, {
        visible: false
    }, {
        visible: false
    }],
    plotOptions: {
        area: {
            depth: 100,
            marker: {
                enabled: false
            },
            states: {
                inactive: {
                    enabled: false
                }
            }
        }
    },
    tooltip: {
        valueSuffix: ' MAMSL'
    },
    series: [{
        name: 'Tatra Mountains visible from Rusinowa polana',
        lineColor: 'rgb(180,90,50)',
        color: 'rgb(200,110,50)',
        fillColor: 'rgb(200,110,50)',
        data: [
            ['Murań', 1890],
            ['Nowy Wierch', 2009],
            ['Hawrań', 2152],
            ['Płaczliwa Skała', 2142],
            ['Szalony Wierch', 2061],
            ['Karczmarski Wierch', 1438],
            ['Jagnięcy Szczyt', 2230],
            ['Czerwona Turnia', 2284],
            ['Kołowy Szczyt', 2418],
            ['Czarny Szczyt', 2429],
            ['Baranie Rogi', 2526],
            ['Śnieżny Szczyt', 2465],
            ['Lodowy Szczyt', 2627],
            ['Lodowa Kopa', 2602],
            ['Szeroka Jaworzyńska', 2210],
            ['Horwacki Wierch', 1902],
            ['Spismichałowa Czuba', 2012],
            ['Zielona Czuba', 2130],
            ['Wielicki Szczyt', 2318],
            ['Gerlach', 2655],
            ['Batyżowiecki Szczyt', 2448],
            ['Kaczy Szczyt', 2395],
            ['Zmarzły Szczyt', 2390],
            ['Kończysta', 2538],
            ['Młynarz', 2170],
            ['Ganek', 2462],
            ['Wysoka', 2547],
            ['Ciężki Szczyt', 2520],
            ['Rysy', 2503],
            ['Żabi Mnich', 2146],
            ['Żabi Koń', 2291],
            ['Żabia Turnia Mięguszowiecka', 2335],
            ['Wołowa Turnia', 2373]
        ]
    }, {
        xAxis: 1,
        lineColor: 'rgb(120,160,180)',
        color: 'rgb(140,180,200)',
        fillColor: 'rgb(140,180,200)',
        name: 'Dachstein panorama seen from Krippenstein',
        data: [
            ['Kufstein', 2049],
            ['Hohe Wildstelle', 2746],
            ['Kleiner Miesberg', 2173],
            ['Großer Miesberg', 2202],
            ['Hochstein', 2543],
            ['Lackner Miesberg', 2232],
            ['Wasenspitze', 2257],
            ['Sinabell', 2349],
            ['Feister Scharte', 2198],
            ['Eselstein', 2556],
            ['Landfriedstein', 2536],
            ['Scheichenspitz', 2667],
            ['Schmiedstock', 2634],
            ['Gamsfeldspitze', 2611],
            ['Edelgriess', 2305],
            ['Koppenkarstein', 2863],
            ['Niederer Gjaidstein', 2483],
            ['Hoher Gjaidstein', 2794],
            ['Hoher Dachstein', 2995],
            ['Niederer Dachstein', 2934],
            ['Hohes Kreuz', 2837],
            ['Hoher Ochsenkogel', 2513]
        ]
    }, {
        xAxis: 2,
        lineColor: 'rgb(200, 190, 140)',
        color: 'rgb(200, 190, 140)',
        fillColor: 'rgb(230, 220, 180)',
        name: 'Panorama from Col Des Mines',
        data: [
            ['Combin de la Tsessette', 4141],
            ['Grand Combin de Grafeneire', 4314],
            ['Combin de Corbassière', 3716],
            ['Petit Combin', 3672],
            ['Pointe de Boveire', 3212],
            ['Grand Aget', 3133],
            ['Mont Rogneux', 3084],
            ['Dents du Grand Lé', 2884],
            ['Monts Telliers', 2951],
            ['Grand Golliat', 3238],
            ['Mont Grande Rochère', 3326],
            ['Mont de la Fouly', 2871],
            ['Tête de la Payanne', 2452],
            ['Pointe Allobrogia', 3172],
            ['Six Blanc', 2334],
            ['Mont Dolent', 3820],
            ['Aiguille de Triolet', 3870],
            ['Le Tour Noir', 3836],
            ['Aiguille de l\'A Neuve', 3753],
            ['Aiguille d\'Argentière', 3900],
            ['Aiguille du Chardonnet', 3824],
            ['Aiguille du Tour', 3540],
            ['Aiguille du Pissoir', 3440],
            ['Le Catogne', 2598],
            ['Pointe de Prosom', 2762],
            ['Pointe Ronde', 2700],
            ['Mont Buet', 3096],
            ['Le Cheval Blanc', 2831],
            ['Pointe de la Finive', 2838],
            ['Pic de Tenneverge', 2985],
            ['Pointe d\'Aboillon', 2819],
            ['Tour Sallière', 3220],
            ['Le Dôme', 3138],
            ['Haute Cime', 3257],
            ['Pierre Avoi', 2473],
            ['Cime de l\'Est', 3178]
        ]
    }]
});

Highcharts.chart('chart4', {
    chart: {
        type: 'bar'
    },
    title: {
		text: 'UEFA CL Top Scorers by Season',
		align: 'left'
    },
    xAxis: {
        categories: ['2020/21', '2019/20', '2018/19', '2017/18', '2016/17']
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Goals'
        }
    },
    legend: {
        reversed: true
    },
    plotOptions: {
        series: {
            stacking: 'normal',
            dataLabels: {
                enabled: true
            }
        }
    },
    series: [{
        name: 'Cristiano Ronaldo',
        data: [4, 4, 6, 15, 12]
    }, {
        name: 'Lionel Messi',
        data: [5, 3, 12, 6, 11]
    }, {
        name: 'Robert Lewandowski',
        data: [5, 15, 8, 5, 8]
    }]
});