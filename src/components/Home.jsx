// src/components/Home.jsx
import React from 'react';
import DpBossClone from './Dpboss';
import DpbossChart from './DpbossChart';
import Satta from './Satta';
import WeeklyTable from './WeeklyTable';
import ChartList from './ChartList';
import F from './F';
import Button from './Button';
import WhatsAppFloat from './WhatsAppFloat';

const Home = () => {
  return (
    <div className="app-container">
      <header>
        <DpBossClone />
      </header>

      <section className="charts-section">
        <DpbossChart />
        <ChartList />
      </section>

      <section className="satta-section">
        <Satta />
        <WeeklyTable />
      </section>

      <footer>
        <F />
      </footer>

      <Button />
      <WhatsAppFloat />
    </div>
  );
};

export default Home;
