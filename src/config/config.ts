export const devAppId = 311;
export const prodAppId = 310;

export const config = {
	appId: kintone?.app?.getId() ?? devAppId,
	storeAppId: 19,
};