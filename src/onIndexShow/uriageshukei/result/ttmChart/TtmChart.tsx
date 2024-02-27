import {Text, VStack} from '@chakra-ui/react';
import {useMonths, useTTMData} from 'onIndexShow/uriageshukei/hooks';
import {useMemo} from 'react';
import {LineChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Line} from 'recharts';

type TTMChartSeriesRow = {
	monthKey: string;
	amount: number;
};

type TTMChartSeries = Array<{
	name: string;
	data: TTMChartSeriesRow[];
}>;

const strokeColor: Record<number, string> = {
	1: '#FFA500',
	2: '#0047AB',
};

export default function TtmChart() {
	const ttmData = useTTMData();
	const months = useMonths();

	const years = useMemo(
		() => Object.keys(ttmData)
			.map(Number)
			.sort((a, b) => a - b), 
	  [ttmData],
	);

	console.log('years', years, ttmData[2023]);

	const series: TTMChartSeries = useMemo(() => years.map((year) => ({
		name: `${year}年`,
		data: months.map<TTMChartSeriesRow>((month) => ({
			monthKey: `${month}月`,
			amount: ttmData[year]?.[month],
		})),
	})), [ttmData, months, years]);

	console.log('series', series);

	return (
		<VStack>
			<Text fontSize='sm' fontWeight={'bold'} color={'gray.600'}>TTM</Text>
			<LineChart 
				width={600} 
				height={350} 
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
						stroke={strokeColor?.[index]}
						strokeWidth={3}
					/>
				))}
				<XAxis dataKey="monthKey" tick={{fontSize: 10}} tickCount={12} allowDuplicatedCategory={false}/>
				<YAxis dataKey="amount" width={100} tickCount={8} tick={{fontSize: 10}}/>
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