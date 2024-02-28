import {kintoneClient} from 'clients/kintoneClient';
import {config, prodAppId} from 'config/config';
import {type TSettings} from 'types';

type CustomStoreOptions = Array<{
	label: string;
	data: string[];
}>;

export const getCustomStoreOptions = async () => {

	try {
		const result = await kintoneClient.record.getRecords({
			app: config.settingsAppId,
			query: `コード = "${prodAppId}"`,
		});

		const [record] = result.records as unknown as TSettings[];

		const customStoreOptions = record.設定.value
			.find(({value: {設定名}}) => 設定名.value === 'customStoreOptions')?.value?.設定値.value;

		if (!customStoreOptions) {
			throw new Error('カスタム設定が見つかりませんでした。');
		}

		return JSON.parse(customStoreOptions) as CustomStoreOptions;

	} catch (error) {
		console.error(error);
		throw new Error('カスタム設定取得が失敗しました。');
	}
};