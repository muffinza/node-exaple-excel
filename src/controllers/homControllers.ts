import { Request, Response } from 'express';
import { saveData , removeData, generalExcel } from '../models/dataModel';
import fs from 'fs';
import xlsx from 'xlsx';


export const getHome = (req: Request, res: Response) => {
  res.send('Hello, Express with MVC!');
};

export const postData = (req: Request, res: Response) => {
  const receivedData = req.body;
  saveData(receivedData);
  res.send('Data received and saved successfully');
};

export const addUser = (req: Request, res: Response) => {
  const receivedData = req.body;
  const resSave = saveData(receivedData);
  //res.send('my name mumu');
  res.send(resSave);
};

export const deleteData = (req: Request, res: Response) => {
  const id = req.params.id;
  const success = removeData(id);
  if (success) {
    res.send(`Data with id ${id} deleted successfully`);
  } else {
    res.status(404).send(`Data with id ${id} not found`);
  }
};

export const getExcel = (req: Request, res: Response) => {
  const data = req.body.result;
  const success = generalExcel(data);

  const tempData = data.map((e:any)=>{
    return {
      "รหัสร้าน":e.newStoreCode,
      "ชื่อร้านสาขา":e.newStoreName,
      "Zone":e.zone,
      "ฝ่าย":e.storeDvName,
      "เขต":e.storeMnName,
      "วันที่เปิดปิด":e.openDate,
      "สถานะ":e.wfStepName
    }
  })

    // Create a new workbook and worksheet
    const workbook = xlsx.utils.book_new();
    const worksheet = xlsx.utils.json_to_sheet(tempData);

    // Append the worksheet to the workbook
    xlsx.utils.book_append_sheet(workbook, worksheet, 'Sheet1');

    // Write the workbook to a buffer
    const buffer = xlsx.write(workbook, { type: 'buffer', bookType: 'xlsx' });

    // Set the Content-Type header to indicate an Excel file
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    
    // Set the Content-Disposition header to specify the filename
    const name = Math.random().toString()
    res.setHeader('Content-Disposition', `attachment; filename=${name}.xlsx`);

    // Send the buffer as the response
    res.send(buffer);
  console.log(success)
  if (success) {
    //res.send(data);
  } else {
    res.status(404).send(`ผิดพลาดทางเทคนิค`);
  }
};

