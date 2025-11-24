'use client';

import { useState } from 'react';

export default function Page() {
  const [selectedStudent, setSelectedStudent] = useState<'A' | 'B'>('A');

  return (
    <>
      <main>
        <div className="container">
          <div className="header">
            <h1>🤖 Robotics Learning Journey Map</h1>
            <p>Visual representation of course progression from 2026-2031</p>
          </div>

          <div className="student-selector">
            <button
              type="button"
              className={`student-btn ${selectedStudent === 'A' ? 'active' : ''}`}
              onClick={() => setSelectedStudent('A')}
            >
              Student A (Grade 1 Start)
            </button>
            <button
              type="button"
              className={`student-btn ${selectedStudent === 'B' ? 'active' : ''}`}
              onClick={() => setSelectedStudent('B')}
            >
              Student B (Grade 2 Start)
            </button>
          </div>

          <div className="legend">
            <h3>📚 Course Legend</h3>
            <div className="legend-items">
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: 'linear-gradient(135deg, #3b82f6, #2563eb)' }}
                />
                <div>
                  <strong>RoboRoots(using VEX 123)</strong>
                  <br />
                  <small>22 classes • 11 weeks</small>
                </div>
              </div>
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: 'linear-gradient(135deg, #a855f7, #9333ea)' }}
                />
                <div>
                  <strong>BitBrix(using VEX AIM)</strong>
                  <br />
                  <small>35 classes • 17.5 weeks</small>
                </div>
              </div>
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: 'linear-gradient(135deg, #10b981, #059669)' }}
                />
                <div>
                  <strong>MechMettle (using VEX GO)</strong>
                  <br />
                  <small>33 classes • 16.5 weeks</small>
                </div>
              </div>
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}
                />
                <div>
                  <strong>SensorSync (using VEX GO)</strong>
                  <br />
                  <small>30 classes • 15 weeks</small>
                </div>
              </div>
              <div className="legend-item">
                <div
                  className="legend-color"
                  style={{ background: 'linear-gradient(135deg, #ef4444, #dc2626)' }}
                />
                <div>
                  <strong>BattleBots (using VEX GO)</strong>
                  <br />
                  <small>29 classes • 14.5 weeks • Grade 5 Only</small>
                </div>
              </div>
            </div>
          </div>

          <div className="journey-map">
            <div
              id="studentA"
              className="timeline"
              style={{ display: selectedStudent === 'A' ? 'flex' : 'none' }}
            >
              <div className="grade-column">
                <div className="grade-header">
                  <h2>Grade 1</h2>
                  <p>2026-2027</p>
                </div>
                <div className="grade-content">
                  <div className="course-card roboroots">
                    <div className="course-title">RoboRoots(using VEX 123)</div>
                    <div className="course-info">22 classes • 11 weeks</div>
                    <div className="course-info">Grades 1-2</div>
                    <span className="course-period">📅 Jun-Aug</span>
                  </div>
                  <div className="gap-card critical">
                    <div className="gap-icon">⚠️</div>
                    <div className="gap-title">Learning Gap</div>
                    <div className="gap-reason">Waiting for Grade 2 eligibility</div>
                    <span className="gap-duration">⏱️ 28 weeks • Sep-Mar</span>
                  </div>
                  <div className="summer-break">☀️ Summer Break: Apr-May</div>
                </div>
              </div>

              <div className="grade-column">
                <div className="grade-header">
                  <h2>Grade 2</h2>
                  <p>2027-2028</p>
                </div>
                <div className="grade-content">
                  <div className="course-card bitbrix">
                    <div className="course-title">BitBrix (using VEX AIM)</div>
                    <div className="course-info">35 classes • 17.5 weeks</div>
                    <div className="course-info">Grades 2-3</div>
                    <span className="course-period">📅 Jun-Dec</span>
                  </div>
                  <div className="gap-card">
                    <div className="gap-icon">⏸️</div>
                    <div className="gap-title">Waiting Period</div>
                    <div className="gap-reason">Need Grade 4 for next course</div>
                    <span className="gap-duration">⏱️ 14 weeks • Dec-Mar</span>
                  </div>
                  <div className="summer-break">☀️ Summer Break: Apr-May</div>
                </div>
              </div>

              <div className="grade-column">
                <div className="grade-header">
                  <h2>Grade 3</h2>
                  <p>2028-2029</p>
                </div>
                <div className="grade-content">
                  <div className="gap-card alert">
                    <div className="gap-icon">🚨</div>
                    <div className="gap-title">CRITICAL GAP</div>
                    <div className="gap-reason">
                      NO COURSES AVAILABLE
                      <br />
                      Already completed Grade 1-3 courses
                      <br />
                      Next course requires Grade 4
                    </div>
                    <span className="gap-duration">⏱️ 40 WEEKS • Jun-Mar</span>
                  </div>
                  <div className="summer-break">☀️ Summer Break: Apr-May</div>
                </div>
              </div>

              <div className="grade-column">
                <div className="grade-header">
                  <h2>Grade 4</h2>
                  <p>2029-2030</p>
                </div>
                <div className="grade-content">
                  <div className="course-card mechmettle">
                    <div className="course-title">MechMettle (using VEX GO)</div>
                    <div className="course-info">33 classes • 16.5 weeks</div>
                    <div className="course-info">Grades 4-5</div>
                    <span className="course-period">📅 Jun-Oct</span>
                  </div>
                  <div className="course-card sensorsync">
                    <div className="course-title">SensorSync (using VEX GO)</div>
                    <div className="course-info">30 classes • 15 weeks</div>
                    <div className="course-info">Grades 4-5</div>
                    <span className="course-period">📅 Oct-Feb</span>
                  </div>
                  <div className="gap-card natural">
                    <div className="gap-icon">📅</div>
                    <div className="gap-title">Natural Break</div>
                    <div className="gap-reason">Final exam period + waiting for Grade 5</div>
                    <span className="gap-duration">⏱️ 4 weeks • Mar</span>
                  </div>
                  <div className="summer-break">☀️ Summer Break: Apr-May</div>
                </div>
              </div>

              <div className="grade-column">
                <div className="grade-header">
                  <h2>Grade 5</h2>
                  <p>2030-2031</p>
                </div>
                <div className="grade-content">
                  <div className="course-card battlebots">
                    <span className="capstone-badge">🏆 CAPSTONE</span>
                    <div className="course-title">BattleBots (using VEX GO)</div>
                    <div className="course-info">29 classes • 14.5 weeks</div>
                    <div className="course-info">Grade 5 Only</div>
                    <span className="course-period">📅 Jun-Sep</span>
                  </div>
                  <div className="gap-card completed">
                    <div className="gap-icon">✅</div>
                    <div className="gap-title">Journey Complete!</div>
                    <div className="gap-reason">
                      All courses finished
                      <br />
                      Remaining academic year
                    </div>
                    <span className="gap-duration">⏱️ 24 weeks • Sep-Mar</span>
                  </div>
                </div>
              </div>
            </div>

            <div
              id="studentB"
              className="timeline"
              style={{ display: selectedStudent === 'B' ? 'flex' : 'none' }}
            >
              <div className="grade-column">
                <div className="grade-header">
                  <h2>Grade 2</h2>
                  <p>2026-2027</p>
                </div>
                <div className="grade-content">
                  <div className="course-card roboroots">
                    <div className="course-title">RoboRoots(using VEX 123)</div>
                    <div className="course-info">22 classes • 11 weeks</div>
                    <div className="course-info">Grades 1-2</div>
                    <span className="course-period">📅 Jun-Aug</span>
                  </div>
                  <div className="course-card bitbrix">
                    <div className="course-title">BitBrix(using VEX AIM)</div>
                    <div className="course-info">35 classes • 17.5 weeks</div>
                    <div className="course-info">Grades 2-3</div>
                    <span className="course-period">📅 Sep-Mar</span>
                  </div>
                  <div
                    style={{
                      padding: '15px',
                      background: '#d1fae5',
                      borderRadius: '10px',
                      textAlign: 'center',
                      color: '#065f46',
                      fontWeight: 'bold',
                    }}
                  >
                    ✅ Perfect fit! Both courses completed in Grade 2
                  </div>
                  <div className="summer-break">☀️ Summer Break: Apr-May</div>
                </div>
              </div>

              <div className="grade-column">
                <div className="grade-header">
                  <h2>Grade 3</h2>
                  <p>2027-2028</p>
                </div>
                <div className="grade-content">
                  <div className="gap-card alert">
                    <div className="gap-icon">🚨</div>
                    <div className="gap-title">CRITICAL GAP</div>
                    <div className="gap-reason">
                      NO COURSES AVAILABLE
                      <br />
                      Already completed Grade 1-3 courses
                      <br />
                      Next course requires Grade 4
                    </div>
                    <span className="gap-duration">⏱️ 40 WEEKS • Jun-Mar</span>
                  </div>
                  <div className="summer-break">☀️ Summer Break: Apr-May</div>
                </div>
              </div>

              <div className="grade-column">
                <div className="grade-header">
                  <h2>Grade 4</h2>
                  <p>2028-2029</p>
                </div>
                <div className="grade-content">
                  <div className="course-card mechmettle">
                    <div className="course-title">MechMettle (using VEX GO)</div>
                    <div className="course-info">33 classes • 16.5 weeks</div>
                    <div className="course-info">Grades 4-5</div>
                    <span className="course-period">📅 Jun-Oct</span>
                  </div>
                  <div className="course-card sensorsync">
                    <div className="course-title">SensorSync (using VEX GO)</div>
                    <div className="course-info">30 classes • 15 weeks</div>
                    <div className="course-info">Grades 4-5</div>
                    <span className="course-period">📅 Oct-Feb</span>
                  </div>
                  <div className="gap-card natural">
                    <div className="gap-icon">📅</div>
                    <div className="gap-title">Natural Break</div>
                    <div className="gap-reason">Final exam period + waiting for Grade 5</div>
                    <span className="gap-duration">⏱️ 4 weeks • Mar</span>
                  </div>
                  <div className="summer-break">☀️ Summer Break: Apr-May</div>
                </div>
              </div>

              <div className="grade-column">
                <div className="grade-header">
                  <h2>Grade 5</h2>
                  <p>2029-2030</p>
                </div>
                <div className="grade-content">
                  <div className="course-card battlebots">
                    <span className="capstone-badge">🏆 CAPSTONE</span>
                    <div className="course-title">BattleBots (using VEX GO)</div>
                    <div className="course-info">29 classes • 14.5 weeks</div>
                    <div className="course-info">Grade 5 Only</div>
                    <span className="course-period">📅 Jun-Sep</span>
                  </div>
                  <div className="gap-card completed">
                    <div className="gap-icon">✅</div>
                    <div className="gap-title">Journey Complete!</div>
                    <div className="gap-reason">
                      All courses finished
                      <br />
                      Remaining academic year
                    </div>
                    <span className="gap-duration">⏱️ 24 weeks • Sep-Mar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="stats-panel">
            <div className="stat-card blue">
              <div className="stat-value" id="totalIdle">
                {selectedStudent === 'A' ? '110' : '68'}
              </div>
              <div className="stat-label">Total Idle Weeks</div>
            </div>
            <div className="stat-card red">
              <div className="stat-value">40</div>
              <div className="stat-label">Grade 3 Critical Gap</div>
            </div>
            <div className="stat-card green">
              <div className="stat-value">5</div>
              <div className="stat-label">Total Courses</div>
            </div>
            <div className="stat-card purple">
              <div className="stat-value">24</div>
              <div className="stat-label">Grade 5 Gap (Improved!)</div>
            </div>
          </div>

          <div className="info-panel">
            <h3>📊 Key Insights</h3>
            <div className="alert-box warning">
              <strong>⚠️ Major Challenge:</strong> Both students face a complete academic year (40
              weeks) with no course availability in Grade 3. This is the primary issue that needs
              addressing.
            </div>
            <div className="alert-box success">
              <strong>✅ Improvement:</strong> Moving BattleBots to Grade 5 only created better
              course distribution and reduced Grade 5 idle time from 28 to 24 weeks. BattleBots now
              serves as a true capstone achievement course!
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: 40px 20px;
          min-height: 100vh;
        }

        .container {
          max-width: 1400px;
          margin: 0 auto;
        }

        .header {
          text-align: center;
          color: white;
          margin-bottom: 40px;
        }

        .header h1 {
          font-size: 2.5em;
          margin-bottom: 10px;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .header p {
          font-size: 1.1em;
          opacity: 0.95;
        }

        .student-selector {
          display: flex;
          justify-content: center;
          gap: 20px;
          margin-bottom: 40px;
        }

        .student-btn {
          background: white;
          border: none;
          padding: 15px 40px;
          border-radius: 30px;
          font-size: 1.1em;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .student-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
        }

        .student-btn.active {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .legend {
          background: white;
          padding: 25px;
          border-radius: 15px;
          margin-bottom: 30px;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .legend h3 {
          margin-bottom: 15px;
          color: #333;
        }

        .legend-items {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .legend-color {
          width: 30px;
          height: 30px;
          border-radius: 5px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
        }

        .journey-map {
          position: relative;
          background: white;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
          overflow-x: auto;
        }

        .timeline {
          display: flex;
          gap: 30px;
          min-width: max-content;
          position: relative;
          padding-bottom: 20px;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 80px;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
          z-index: 0;
        }

        .grade-column {
          min-width: 250px;
          position: relative;
          z-index: 1;
        }

        .grade-header {
          text-align: center;
          padding: 20px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 15px 15px 0 0;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          position: relative;
        }

        .grade-header::after {
          content: '';
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          border: 4px solid #667eea;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .grade-header h2 {
          font-size: 1.8em;
          margin-bottom: 5px;
        }

        .grade-header p {
          font-size: 0.9em;
          opacity: 0.9;
        }

        .grade-content {
          padding: 30px 15px 15px;
          display: flex;
          flex-direction: column;
          gap: 15px;
          background: #f8f9fa;
          border-radius: 0 0 15px 15px;
          min-height: 400px;
        }

        .course-card {
          padding: 20px;
          border-radius: 12px;
          color: white;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }

        .course-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 100%);
          pointer-events: none;
        }
        strong{
        color:#000;
        }
        small{
        color:#000;
        }
        .stat-value{
        color:#000;
        }
        .student-btn {
        color:#000;
        }
        .course-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
        }

        .course-card.roboroots {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
        }

        .course-card.bitbrix {
          background: linear-gradient(135deg, #a855f7, #9333ea);
        }

        .course-card.mechmettle {
          background: linear-gradient(135deg, #10b981, #059669);
        }

        .course-card.sensorsync {
          background: linear-gradient(135deg, #f59e0b, #d97706);
        }

        .course-card.battlebots {
          background: linear-gradient(135deg, #ef4444, #dc2626);
        }

        .capstone-badge {
          position: absolute;
          top: 10px;
          right: 10px;
          background: rgba(255, 215, 0, 0.95);
          color: #000;
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.75em;
          font-weight: bold;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
        }

        .course-title {
          font-size: 1.3em;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .course-info {
          font-size: 0.9em;
          opacity: 0.95;
          margin-bottom: 5px;
        }

        .course-period {
          display: inline-block;
          background: rgba(255, 255, 255, 0.2);
          padding: 4px 10px;
          border-radius: 15px;
          font-size: 0.85em;
          margin-top: 8px;
        }

        .gap-card {
          padding: 20px;
          border-radius: 12px;
          border: 3px dashed;
          background: white;
          transition: all 0.3s;
        }

        .gap-card.critical {
          border-color: #ef4444;
          background: #fee2e2;
        }

        .gap-card.alert {
          border-color: #dc2626;
          background: #fecaca;
          animation: pulse 2s infinite;
        }

        .gap-card.natural {
          border-color: #3b82f6;
          background: #dbeafe;
        }

        .gap-card.completed {
          border-color: #10b981;
          background: #d1fae5;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.8;
          }
        }

        .gap-icon {
          font-size: 1.5em;
          margin-bottom: 8px;
        }

        .gap-title {
          font-weight: bold;
          font-size: 1.1em;
          margin-bottom: 8px;
          color: #333;
        }

        .gap-reason {
          font-size: 0.9em;
          color: #555;
          margin-bottom: 8px;
        }

        .gap-duration {
          font-size: 0.85em;
          color: #666;
          background: rgba(0, 0, 0, 0.05);
          padding: 5px 10px;
          border-radius: 8px;
          display: inline-block;
        }

        .summer-break {
          text-align: center;
          padding: 12px;
          background: #fff7ed;
          border: 2px dashed #fb923c;
          border-radius: 10px;
          color: #9a3412;
          font-size: 0.9em;
          margin-top: auto;
        }

        .stats-panel {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 20px;
          margin-top: 30px;
        }

        .stat-card {
          background: white;
          padding: 25px;
          border-radius: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          text-align: center;
          border-top: 5px solid;
        }

        .stat-card.blue {
          border-color: #3b82f6;
        }

        .stat-card.red {
          border-color: #ef4444;
        }

        .stat-card.green {
          border-color: #10b981;
        }

        .stat-card.purple {
          border-color: #a855f7;
        }

        .stat-value {
          font-size: 2.5em;
          font-weight: bold;
          margin-bottom: 8px;
        }

        .stat-label {
          color: #666;
          font-size: 0.95em;
        }

        .info-panel {
          background: white;
          padding: 25px;
          border-radius: 15px;
          margin-top: 20px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .info-panel h3 {
          margin-bottom: 15px;
          color: #333;
        }

        .alert-box {
          padding: 15px;
          border-radius: 10px;
          margin-bottom: 15px;
        }

        .alert-box.warning {
          background: #fef3c7;
          border-left: 5px solid #f59e0b;
          color: #92400e;
        }

        .alert-box.success {
          background: #d1fae5;
          border-left: 5px solid #10b981;
          color: #065f46;
        }
      `}</style>
    </>
  );
}