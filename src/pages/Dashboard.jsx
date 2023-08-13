import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../components/Dashboard.css";
import TrackingTimeline from "../components/TrackingTimeline";

const Dashboard = () => {
  const { code } = useParams();
  const [trackingData, setTrackingData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "https://shipsmartly.onrender.com/api/v1/tracking/tracking/",
          { tracking_code: code },
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        setTrackingData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [ConstantSourceNode]);

  return (
    /*  <div>
      <h2>Tracking Details</h2>
      {trackingData ? (
        <div>
          <p>Tracking Code: {trackingData.tracking_code}</p>
          <p>Carrier: {trackingData.carrier}</p>
          <p>From: {trackingData.from}</p>
          <p>To: {trackingData.to}</p>
          <p>Scheduled Delivery Date: {trackingData.scheduled_delivery_date}</p>
          <p>Current Location: {trackingData.current_location}</p>
          <p>Delivery Status: {trackingData.delivery_status}</p>
          
        </div>
      ) : (
        <p>Loading tracking data...</p>
      )}
    </div> */
    <div className="tracking">
        {trackingData ? ( 
      <section className="dashboard-container">
        <div className="dashboard-card">
          <p className="dashboard-label">Tracking Code: </p>
          <p>{trackingData.tracking_code}</p>
          <p className="dashboard-label">Signed by:</p>
          <p>{trackingData.id}</p>
        </div>
        <div className="dashboard-card">
          <p className="dashboard-label">From: </p>
          <p>{trackingData.from}</p>
          <p className="dashboard-label">To:</p>
          <p>  {trackingData.to}</p>
        </div>

        <div className="dashboard-card">
          <p className="dashboard-label">Order Date:</p>
          <p>29 Nov 2019</p>
          <p className="dashboard-label">Scheduled Delivery Date: </p>
          <p>{trackingData.scheduled_delivery_date}</p>
        </div>
        <div className="dashboard-card">
          <p className="dashboard-label">Current Location: </p>
          <p>{trackingData.current_location}</p>
          <p className="dashboard-label">Carrier: </p>
          <p>{trackingData.carrier}</p>
        </div>
        <div className="dashboard-card">
          <p className="dashboard-label">Delivery Status: </p>
          <p>{trackingData.delivery_status}</p>
        </div>
        <div className="dashboard-card">
          <p className="dashboard-label">Download Receipt:</p>
          <p>Download here</p>
        </div>
      </section>
         ) : (
            <p>Loading tracking data...</p>
          )}
      <div>
        <TrackingTimeline className="track-line" />
      </div>
    </div>
  );
};

export default Dashboard;
