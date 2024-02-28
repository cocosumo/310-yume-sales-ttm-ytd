import {Text, VStack} from '@chakra-ui/react';
import {strokeColor} from 'config/styleConfig';
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

export default function TtmChart({
	store,
}: {
	store: string;
}) {
	const ttmData = useTTMData({store});
	const months = useMonths();

	const years = useMemo(
		() => Object.keys(ttmData)
			.map(Number)
			.sort((a, b) => a - b), 
	  [ttmData],
	);

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
				<YAxis 
					dataKey="amount"
					domain={[
						'auto', 
						'auto',
					]}
				 	width={60} 
					tick={{fontSize: 8}}
					tickFormatter={(value: number) => value.toLocaleString()}

				/>
					
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