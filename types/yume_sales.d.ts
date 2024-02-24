declare namespace YumeSales {
  interface Fields {
    saleAmount: kintone.fieldTypes.Number;
    salesDateKey: kintone.fieldTypes.SingleLineText;
    salesDate: kintone.fieldTypes.Date;
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
