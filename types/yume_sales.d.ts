declare namespace YumeSales {
  interface Fields {
    saleAmount: kintone.fieldTypes.Number;
    salesDate: kintone.fieldTypes.Date;
    storeUuid: kintone.fieldTypes.SingleLineText;
    salesFieldKey: kintone.fieldTypes.SingleLineText;
    storeName: kintone.fieldTypes.SingleLineText;
  }
  interface SavedFields extends Fields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}
