import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { db } from "../firebase";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";

function ListTravelPage() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    listTravelGet();
  }, []);

  const deleteTravel = async (id) => {
    await deleteDoc(doc(db, "travel", id));
    listTravelGet();
  };

  const editTravel = async (id) => {
    window.location = "/updatelist/" + id;
  };

  const listTravelGet = async () => {
    await getDocs(collection(db, "travel")).then((querySnapshot) => {
      const newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setItems(newData);
      console.log(newData);
    });
  };

  const toBackPage = async () => {
    window.location = "/";
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-cyan-300 to-blue-600">
      <div className="bg-white  rounded-3xl border shadow-lg p-10 max-w-5xl">
        <Typography className="text-center" variant="h4" component="h2">
          MY TRAVEL <br /> ประวัติการเดินทาง{" "}
        </Typography>{" "}
        <Button onClick={toBackPage} size="small" variant="contained">
          บันทึกการเดินทาง
        </Button>
        <TableContainer
          className="mt-5 border-solid border-2 border-black-500"
          component={Paper}
        >
          <Table sx={{ minWidth: 850 }} size="small" aria-label="simple table">
            <TableHead>
              <TableRow className="bg-gray-200 ">
                <TableCell align="center">วันเดือนปีที่ไป</TableCell>
                <TableCell align="center">วันเดือนปีที่กลับ</TableCell>
                <TableCell align="center">สถานที่ไป</TableCell>
                <TableCell align="center">ค่าใช้จ่าย</TableCell>
                <TableCell align="center">แก้ไข</TableCell>
                <TableCell align="center">ลบ</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items.map((data) => (
                <TableRow
                  /* key={data.startTravel} */
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell align="center">{data.startTravel}</TableCell>
                  <TableCell align="center">{data.endTravel}</TableCell>
                  <TableCell align="center">{data.locationTravel}</TableCell>
                  <TableCell align="center">{data.expense}</TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => editTravel(data.id)}
                      size="small"
                      color="success"
                      variant="contained"
                    >
                      แก้ไข
                    </Button>
                  </TableCell>
                  <TableCell align="center">
                    <Button
                      onClick={() => deleteTravel(data.id)}
                      size="small"
                      color="error"
                      variant="contained"
                    >
                      ลบ
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default ListTravelPage;
