let dataStore: any[] = []; // ตัวอย่างที่ใช้เก็บข้อมูลในหน่วยความจำ
export const saveData = (data: any) => {
    // Save the data to a database or a file
    dataStore.push(data);
    console.log('Data saved:', data.name,"list data",dataStore);
    return "sava name success! ===> "+data.name
  };


export const removeData = (id: string) => {
    const index = dataStore.findIndex(item => item.id === id);
    if (index !== -1) {
      dataStore.splice(index, 1);
      console.log(`Data with id ${id} deleted`);
      return true;
    } else {
      console.log(`Data with id ${id} not found`);
      return false;
    }
  };


export const generalExcel = (data:any)=>{
  console.log(data)
      const result_mock = { "result": [
      {
          "newStoreCode": "00228",
          "newStoreName": "สาขา อนุสาวรีย์-2",
          "modelStoreCode": "08679",
          "modelStoreName": "สาขา  ราชวิถี 12",
          "zone": "BN",
          "openDate": "19/02/2024",
          "total": null,
          "storeDvId": "3200379",
          "storeDvName": "AGM.ชัยภัทร พวงจำปา",
          "storeMnId": "3940953",
          "storeMnName": "เชวง ตันกูล",
          "wfTransactionId": "50422",
          "wfVersionId": "1",
          "wfStepId": "109",
          "wfStepName": "สร้างไฟล์ Order ทั้งหมด",
          "wfStatusId": "109",
          "displayStoreModel": "R",
          "displayFilter": "W",
          "modeFilter": "V",
          "colorFilter": "GN",
          "displayAdjust": "W",
          "modeAdjust": "V",
          "colorAdjust": "GR",
          "displayConfirm": "R",
          "colorConfirm": "GR",
          "displayGen": "R",
          "colorGen": "GN",
          "noOverOpendate": "close"
      },
      {
          "newStoreCode": "00228",
          "newStoreName": "สาขา อนุสาวรีย์-2",
          "modelStoreCode": "08679",
          "modelStoreName": "สาขา  ราชวิถี 12",
          "zone": "BN",
          "openDate": "19/02/2024",
          "total": null,
          "storeDvId": "3200379",
          "storeDvName": "AGM.ชัยภัทร พวงจำปา",
          "storeMnId": "3940953",
          "storeMnName": "เชวง ตันกูล",
          "wfTransactionId": "50423",
          "wfVersionId": "2",
          "wfStepId": "208",
          "wfStepName": "สร้างไฟล์ Order ทั้งหมด",
          "wfStatusId": "208",
          "displayStoreModel": "R",
          "displayFilter": "W",
          "modeFilter": "V",
          "colorFilter": "GN",
          "displayAdjust": "W",
          "modeAdjust": "V",
          "colorAdjust": "GN",
          "displayConfirm": "R",
          "colorConfirm": "GN",
          "displayGen": "R",
          "colorGen": "GN",
          "noOverOpendate": "close"
      },
      {
          "newStoreCode": "00228",
          "newStoreName": "สาขา อนุสาวรีย์-2",
          "modelStoreCode": "08679",
          "modelStoreName": "สาขา  ราชวิถี 12",
          "zone": "BN",
          "openDate": "19/02/2024",
          "total": null,
          "storeDvId": "3200379",
          "storeDvName": "AGM.ชัยภัทร พวงจำปา",
          "storeMnId": "3940953",
          "storeMnName": "เชวง ตันกูล",
          "wfTransactionId": "50424",
          "wfVersionId": "3",
          "wfStepId": "308",
          "wfStepName": "สร้างไฟล์ Order ทั้งหมด",
          "wfStatusId": "308",
          "displayStoreModel": "R",
          "displayFilter": "W",
          "modeFilter": "V",
          "colorFilter": "GN",
          "displayAdjust": "W",
          "modeAdjust": "V",
          "colorAdjust": "GR",
          "displayConfirm": "R",
          "colorConfirm": "GR",
          "displayGen": "R",
          "colorGen": "GN",
          "noOverOpendate": "close"
      },
      {
          "newStoreCode": "00228",
          "newStoreName": "สาขา อนุสาวรีย์-2",
          "modelStoreCode": "08679",
          "modelStoreName": "สาขา  ราชวิถี 12",
          "zone": "BN",
          "openDate": "19/02/2024",
          "total": null,
          "storeDvId": "3200379",
          "storeDvName": "AGM.ชัยภัทร พวงจำปา",
          "storeMnId": "3940953",
          "storeMnName": "เชวง ตันกูล",
          "wfTransactionId": "50425",
          "wfVersionId": "4",
          "wfStepId": "408",
          "wfStepName": "สร้างไฟล์ Order ทั้งหมด",
          "wfStatusId": "408",
          "displayStoreModel": "R",
          "displayFilter": "W",
          "modeFilter": "V",
          "colorFilter": "GN",
          "displayAdjust": "W",
          "modeAdjust": "V",
          "colorAdjust": "GR",
          "displayConfirm": "R",
          "colorConfirm": "GR",
          "displayGen": "R",
          "colorGen": "GN",
          "noOverOpendate": "close"
      }
  ]}
  return result_mock
}