import React, { useState } from "react";
import Container from "@mui/material/Container";
import { Grid, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function TravelPages() {
  const [startTravel, setStartTravel] = useState("");
  const [endTravel, setEndTravel] = useState("");
  const [locationTravel, setLocationTravel] = useState("");
  const [expense, setExpense] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "travel"), {
        startTravel: startTravel,
        endTravel: endTravel,
        locationTravel: locationTravel,
        expense: expense,
      });
      alert(`Create Success ID: ${docRef.id}`);
      setStartTravel("");
      setEndTravel("");
      setLocationTravel("");
      setExpense("");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const clickToListTravel = () => {
    window.location = "/listtravel";
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-cyan-300 to-blue-600">
      <div className="bg-white text-center rounded-3xl border shadow-lg p-10 max-w-2xl">
        <Typography variant="h4" component="h2">
          My Travel <br /> บันทึกข้อมูลการเดินทาง{" "}
        </Typography>{" "}
        <Container maxWidth="lg" sx={{ p: 2 }}>
          <form onSubmit={handleSubmit}>
            <Grid sx={{ p: 2 }} container spacing={2}>
              <Grid item xs={12} sm={6}>
                <Typography
                  className="flex items-start"
                  variant="h9"
                  component="h2"
                >
                  วันเดือนปีที่ไป
                </Typography>{" "}
                <TextField
                  size="small"
                  id="fname"
                  variant="outlined"
                  fullWidth
                  required
                  value={startTravel}
                  onChange={(e) => setStartTravel(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Typography
                  className="flex items-start"
                  variant="h9"
                  component="h2"
                >
                  วันเดือนปีที่กลับ
                </Typography>{" "}
                <TextField
                  size="small"
                  id="fname"
                  variant="outlined"
                  fullWidth
                  required
                  value={endTravel}
                  onChange={(e) => setEndTravel(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  className="flex items-start"
                  variant="h9"
                  component="h2"
                >
                  สถานที่ไป
                </Typography>{" "}
                <TextField
                  size="small"
                  id="fname"
                  variant="outlined"
                  fullWidth
                  required
                  value={locationTravel}
                  onChange={(e) => setLocationTravel(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography
                  className="flex items-start"
                  variant="h9"
                  component="h2"
                >
                  ค่าใช้จ่ายตลอดการเดินทาง
                </Typography>{" "}
                <TextField
                  type={"number"}
                  size="small"
                  id="fname"
                  variant="outlined"
                  fullWidth
                  required
                  value={expense}
                  onChange={(e) => setExpense(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button type="submit" variant="contained" fullWidth>
                  บันทึกการเดินทาง
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  onClick={clickToListTravel}
                  color="success"
                  variant="contained"
                  fullWidth
                >
                  Page : ประวัติการเดินทาง
                </Button>
              </Grid>
            </Grid>
          </form>
        </Container>
      </div>{" "}
    </div>
  );
}

export default TravelPages;
