import {Text, VStack} from '@chakra-ui/react';
import {strokeColor} from 'config/styleConfig';
import {useMonths, useYTDData} from 'onIndexShow/uriageshukei/hooks';
import {useMemo} from 'react';
import {CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis} from 'recharts';

type YTDChartSeriesRow = {
	monthKey: string;
	amount: number;
};

type YTDCChartSeries = Array<{
	name: string;
	data: YTDChartSeriesRow[];
}>;

export default function YtdChart() {
	const ytdData = useYTDData();
	const months = useMonths();

	const years = useMemo(
		() => Object.keys(ytdData)
			.map(Number)
			.sort((a, b) => a - b), 
	  [ytdData],
	);

  
	const series: YTDCChartSeries = useMemo(() => years.map((year) => ({
		name: `${year}年`,
		data: months.map<YTDChartSeriesRow>((month) => ({
			monthKey: `${month}月`,
			amount: ytdData[year]?.[month],
		})),
	})), [ytdData, months, years]);



	return (
		<VStack px={4}>
			<Text fontSize='sm' fontWeight={'bold'} color={'gray.600'}>
        YTD
			</Text>
			<LineChart 
				width={580} 
				height={250} 
			>

				<CartesianGrid 
					stroke="#ccc" 
					strokeDasharray="5 5" 
				/>
				{series.map((s, index) => (
					<Line
						key={s.name}
						type="monotone"
						dataKey="amount"
						data={s.data}
						name={s.name}
						stroke={strokeColor?.[series.length - index - 1]}
						strokeWidth={3}
					/>
				))}
				<XAxis dataKey="monthKey" tick={{fontSize: 10}} tickCount={12} allowDuplicatedCategory={false}/>
				<YAxis dataKey="amount" width={60} tickCount={8} tick={{fontSize: 10}}/>
				<Tooltip 
					formatter={(value: number) => value.toLocaleString()}
				/>
				<Legend 
					verticalAlign="bottom" 
					wrapperStyle={{fontSize: 10}}
				/>

			</LineChart>
		</VStack>
	);
}