# Professional Support Service  
<!-- wp:html -->  
<div id="wp-valuation-support">  
    <style>  
        /* Scoped Variables and Reset for WordPress Compatibility */  
        #wp-valuation-support {  
            --slate-50: #f8fafc;  
            --slate-100: #f1f5f9;  
            --slate-200: #e2e8f0;  
            --slate-300: #cbd5e1;  
            --slate-600: #475569;  
            --slate-700: #334155;  
            --slate-800: #1e293b;  
            --slate-900: #0f172a;  
            --blue-600: #2563eb;  
            --blue-700: #1d4ed8;  
            --blue-800: #1e40af;  
            --blue-900: #1e3a8a;  
            --radius-lg: 20px;  
            --radius-md: 12px;  
            --transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);  
              
            font-family: ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;  
            background-color: var(--slate-50);  
            color: var(--slate-700);  
            line-height: 1.6;  
            -webkit-font-smoothing: antialiased;  
            overflow-x: hidden;  
        }  
  
        #wp-valuation-support * {  
            box-sizing: border-box;  
        }  
  
        #wp-valuation-support .be-container {  
            max-width: 1024px;  
            margin: 0 auto;  
            padding: 0 24px;  
        }  
  
        #wp-valuation-support section {  
            padding: 80px 0;  
        }  
  
        /* Typography */  
        #wp-valuation-support h1 {  
            font-size: clamp(36px, 6vw, 52px);  
            font-weight: 800;  
            color: var(--slate-900);  
            line-height: 1.1;  
            letter-spacing: -0.03em;  
            margin: 0 0 24px 0;  
        }  
  
        #wp-valuation-support h2 {  
            font-size: clamp(28px, 4vw, 36px);  
            font-weight: 700;  
            color: var(--slate-900);  
            letter-spacing: -0.02em;  
            margin: 0 0 20px 0;  
        }  
  
        #wp-valuation-support h3 {  
            font-size: 20px;  
            font-weight: 700;  
            color: var(--slate-900);  
            margin: 0 0 12px 0;  
        }  
  
        #wp-valuation-support p {  
            font-size: 18px;  
            color: var(--slate-600);  
            margin: 0 0 20px 0;  
        }  
  
        #wp-valuation-support .label {  
            display: inline-block;  
            font-size: 13px;  
            font-weight: 700;  
            text-transform: uppercase;  
            letter-spacing: 0.1em;  
            color: var(--blue-700);  
            margin-bottom: 12px;  
        }  
  
        /* Buttons */  
        #wp-valuation-support .btn {  
            display: inline-flex;  
            align-items: center;  
            justify-content: center;  
            padding: 14px 28px;  
            border-radius: var(--radius-md);  
            font-weight: 700;  
            font-size: 16px;  
            text-decoration: none;  
            transition: var(--transition);  
            cursor: pointer;  
            border: none;  
            gap: 8px;  
            margin: 0;  
        }  
  
        #wp-valuation-support .btn-primary {  
            background-color: var(--blue-900) !important;  
            color: white !important;  
        }  
  
        #wp-valuation-support .btn-primary:hover {  
            background-color: var(--blue-800) !important;  
            transform: translateY(-2px);  
            box-shadow: 0 10px 15px -3px rgba(30, 58, 138, 0.2);  
        }  
  
        #wp-valuation-support .btn-secondary {  
            background-color: white !important;  
            color: var(--blue-900) !important;  
            border: 1px solid var(--slate-200);  
        }  
  
        #wp-valuation-support .btn-secondary:hover {  
            background-color: var(--slate-50) !important;  
            border-color: var(--slate-300);  
        }  
  
        /* Cards & Grids */  
        #wp-valuation-support .grid {  
            display: grid;  
            gap: 24px;  
        }  
  
        @media (min-width: 768px) {  
            #wp-valuation-support .grid-2 { grid-template-columns: repeat(2, 1fr); }  
            #wp-valuation-support .grid-3 { grid-template-columns: repeat(3, 1fr); }  
        }  
  
        #wp-valuation-support .card {  
            background: white;  
            border: 1px solid var(--slate-200);  
            border-radius: var(--radius-lg);  
            padding: 32px;  
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);  
            transition: var(--transition);  
        }  
  
        #wp-valuation-support .card:hover {  
            transform: translateY(-4px);  
            box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.05);  
        }  
  
        /* Hero Styling */  
        #wp-valuation-support .hero {  
            text-align: center;  
            padding: 60px 0;  
            background: radial-gradient(circle at top, #eff6ff 0%, transparent 60%);  
        }  
  
        #wp-valuation-support .hero p.lead {  
            font-size: 24px;  
            font-weight: 300;  
            font-style: italic;  
            color: var(--slate-600);  
            margin-bottom: 24px;  
        }  
  
        /* Intake Area */  
        #wp-valuation-support .intake-section {  
            background: white;  
            border-left: 6px solid var(--blue-900);  
        }  
  
        #wp-valuation-support .intake-box-wrapper {  
            position: relative;  
            margin: 24px 0;  
        }  
  
        #wp-valuation-support .intake-box {  
            background: var(--slate-100);  
            border: 1.5px dashed var(--slate-300);  
            border-radius: var(--radius-md);  
            padding: 28px;  
            font-family: ui-monospace, "Cascadia Code", "Source Code Pro", Menlo, monospace;  
            font-size: 14px;  
            color: var(--slate-800);  
            line-height: 1.7;  
            white-space: pre-wrap;  
            text-align: left;  
        }  
  
        #wp-valuation-support .copy-btn {  
            position: absolute;  
            top: 12px;  
            right: 12px;  
            background: white;  
            border: 1px solid var(--slate-200);  
            padding: 6px 12px;  
            border-radius: 8px;  
            font-size: 12px;  
            font-weight: 700;  
            color: var(--blue-900);  
            cursor: pointer;  
            transition: var(--transition);  
        }  
  
        /* Lists */  
        #wp-valuation-support .be-list {  
            list-style: none;  
            padding: 0;  
            margin: 0;  
        }  
  
        #wp-valuation-support .be-list li {  
            position: relative;  
            padding-left: 32px;  
            margin: 0 0 12px 0;  
            font-size: 15px;  
            color: var(--slate-600);  
        }  
  
        #wp-valuation-support .be-list li::before {  
            content: "";  
            position: absolute;  
            left: 0;  
            top: 4px;  
            width: 20px;  
            height: 20px;  
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke-width='3' stroke='%232563eb'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='m4.5 12.75 6 6 9-13.5' /%3E%3C/svg%3E");  
            background-size: contain;  
            background-repeat: no-repeat;  
        }  
  
        /* Footer */  
        #wp-valuation-support .footer {  
            background: var(--slate-900);  
            color: white;  
            border-radius: 32px;  
            padding: 60px 40px;  
            text-align: center;  
            margin-bottom: 60px;  
        }  
  
        #wp-valuation-support .footer h2,   
        #wp-valuation-support .footer p {   
            color: white;   
        }  
  
        #wp-valuation-support .footer-links {  
            display: flex;  
            justify-content: center;  
            gap: 24px;  
            flex-wrap: wrap;  
            margin: 32px 0;  
        }  
  
        #wp-valuation-support .footer-link {  
            color: #bfdbfe !important;  
            font-weight: 700;  
            text-decoration: none;  
            font-size: 18px;  
            border-bottom: 2px solid transparent;  
            transition: var(--transition);  
        }  
  
        #wp-valuation-support .footer-link:hover {  
            color: white !important;  
            border-bottom-color: white;  
        }  
  
        #wp-valuation-support .badge-number {  
            width: 36px;  
            height: 36px;  
            background: var(--blue-100);  
            color: var(--blue-900);  
            border-radius: 50%;  
            display: flex;  
            align-items: center;  
            justify-content: center;  
            font-weight: 800;  
            margin-bottom: 16px;  
        }  
  
        #wp-valuation-support .icon-lg {  
            font-size: 40px;  
            margin-bottom: 16px;  
            display: block;  
        }  
  
        /* Notification */  
        #wp-valuation-support #notification-wp {  
            position: fixed;  
            bottom: 24px;  
            left: 50%;  
            transform: translateX(-50%) translateY(100px);  
            background: var(--slate-900);  
            color: white;  
            padding: 12px 24px;  
            border-radius: 99px;  
            font-weight: 600;  
            transition: var(--transition);  
            z-index: 99999;  
            box-shadow: 0 10px 15px -3px rgba(0,0,0,0.2);  
            pointer-events: none;  
        }  
  
        #wp-valuation-support #notification-wp.show {  
            transform: translateX(-50%) translateY(0);  
        }  
    </style>  
  
    <div class="be-container">  
        <!-- Hero Section -->  
        <header class="hero">  
            <span class="label">Professional B2B Support</span>  
            <h1>Valuation Support for Professionals.</h1>  
            <p class="lead">Fast, client-ready market clarity—especially in distressed or complex cases.</p>  
            <p style="max-width: 720px; margin: 0 auto 32px;">For agents, appraisers, attorneys, accountants, and planners who need defensible market support to improve client communication and strategy.</p>  
            <div style="display: flex; gap: 12px; justify-content: center; flex-wrap: wrap;">  
                <a href="#intake-wp" class="btn btn-primary">Start Request</a>  
                <a href="#segments-wp" class="btn btn-secondary">Service Segments</a>  
            </div>  
        </header>  
  
        <!-- Value Prop -->  
        <section>  
            <div class="card grid grid-3" style="text-align: center;">  
                <div>  
                    <span class="icon-lg">📊</span>  
                    <h3>Defensible Value</h3>  
                    <p style="font-size: 15px;">A clear value range supported by real-world comps and current market behavior.</p>  
                </div>  
                <div>  
                    <span class="icon-lg">💬</span>  
                    <h3>Client Narrative</h3>  
                    <p style="font-size: 15px;">A condition-to-price explanation you can present directly to your client.</p>  
                </div>  
                <div>  
                    <span class="icon-lg">📄</span>  
                    <h3>PDF Packages</h3>  
                    <p style="font-size: 15px;">Professional, clean deliverables ready for your files or email attachments.</p>  
                </div>  
            </div>  
            <p style="text-align: center; font-size: 13px; color: var(--slate-600); margin-top: 24px;">  
                <strong>Note:</strong> Decision-support deliverables only. Not a formal appraisal for lending or financing use.  
            </p>  
        </section>  
  
        <!-- Intake Section -->  
        <section id="intake-wp">  
            <div class="card intake-section">  
                <h2>Fast Intake (Copy/Paste)</h2>  
                <p>Busy workflow? Copy this template into an email or text. I’ll reply with a recommended scope and realistic turnaround time.</p>  
                  
                <div class="intake-box-wrapper">  
                    <button class="copy-btn" onclick="copyTemplateWP()">Copy Template</button>  
                    <div class="intake-box" id="template-text-wp">Subject: Professional Valuation Support Request  
  
Property: (address or cross-streets)  
Purpose: (listing / offer review / dispute / estate)  
Property type: (SFR / 2–4 unit / mixed-use)  
Condition: (brief details)  
Timing: (deadline + desired turnaround)  
Role: (agent/appraiser/attorney/etc)</div>  
                </div>  
  
                <div style="display: flex; align-items: center; gap: 20px; flex-wrap: wrap;">  
                    <a href="mailto:ronwilliams@fathomrealty.com?subject=Professional%20Valuation%20Support%20Request" class="btn btn-primary">Email Request</a>  
                    <div style="font-size: 14px; color: var(--slate-600);">  
                        <strong>Turnaround:</strong> Standard (24–48h) | Rush (Same Day)  
                    </div>  
                </div>  
            </div>  
        </section>  
  
        <!-- Specialized Support Segments -->  
        <section id="segments-wp">  
            <h2 style="text-align: center; margin-bottom: 40px;">Professional Service Segments</h2>  
            <div class="grid grid-2">  
                <div class="card">  
                    <h3>AMC Valuation Support Services</h3>  
                    <p style="font-size: 16px;">Assisting Management Companies with robust data verification and local market context.</p>  
                    <ul class="be-list">  
                        <li>Vendor oversight data support</li>  
                        <li>Market consistency & trend reports</li>  
                        <li>Desktop review assistance</li>  
                        <li>Regional market data aggregation</li>  
                    </ul>  
                </div>  
                <div class="card">  
                    <h3>Appraiser Support Services</h3>  
                    <p style="font-size: 16px;">I handle the time-intensive legwork so you can focus on final adjustments and analysis.</p>  
                    <ul class="be-list">  
                        <li>On-the-ground property data collection</li>  
                        <li>MLS & Public record reconciliation</li>  
                        <li>Comparable property deep-dives</li>  
                        <li>Increase your weekly report capacity</li>  
                    </ul>  
                </div>  
                <div class="card">  
                    <h3>Agent Support Services</h3>  
                    <p style="font-size: 16px;">Defensible pricing data for listing presentations and complex buyer offer reviews.</p>  
                    <ul class="be-list">  
                        <li>CMA enhancement & market positioning</li>  
                        <li>Condition-to-price narrative support</li>  
                        <li>Distressed property market analysis</li>  
                        <li>Professional PDF presentation packages</li>  
                    </ul>  
                </div>  
                <div class="card">  
                    <h3>Other Professional Support Services</h3>  
                    <p style="font-size: 16px;">Strategic market context for legal, financial, and estate planning professionals.</p>  
                    <ul class="be-list">  
                        <li>Estate, Probate & Tax planning context</li>  
                        <li>Divorce / Marital asset split support</li>  
                        <li>Documentation for claims or disputes</li>  
                        <li>Plain-language narratives for clients</li>  
                    </ul>  
                </div>  
            </div>  
        </section>  
  
        <!-- Options Section -->  
        <section id="options-wp">  
            <h2 style="text-align: center; margin-bottom: 40px;">Ways to Collaborate</h2>  
            <div class="grid grid-3">  
                <div class="card">  
                    <div class="badge-number">1</div>  
                    <h3>Property Data Collection</h3>  
                    <p style="font-size: 15px;">Accurate, on-site property verification and condition documentation for your files.</p>  
                </div>  
                <div class="card">  
                    <div class="badge-number">2</div>  
                    <h3>Market Analysis</h3>  
                    <p style="font-size: 15px;">Localized trend reporting and comparative data to establish a firm market position.</p>  
                </div>  
                <div class="card">  
                    <div class="badge-number">3</div>  
                    <h3>Broker Price Opinions</h3>  
                    <p style="font-size: 15px;">Professional BPO reports providing defensible value estimates for non-lending use.</p>  
                </div>  
            </div>  
        </section>  
  
        <!-- Footer -->  
        <footer class="footer">  
            <h2>Ready to start a case?</h2>  
            <p style="margin-bottom: 32px; opacity: 0.8;">Send a quick overview and I'll confirm timing immediately.</p>  
              
            <div class="footer-links">  
                <a href="mailto:ronwilliams@fathomrealty.com" class="footer-link">Email Ron</a>  
                <a href="tel:12154691382" class="footer-link">(215) 469-1382</a>  
            </div>  
  
            <div style="margin-top: 48px; border-top: 1px solid rgba(255,255,255,0.1); padding-top: 32px; font-size: 13px; opacity: 0.6; line-height: 2;">  
                Ronald M. Williams | Fathom Realty<br>  
                100 South Juniper, 3rd Floor - #9261<br>  
                Philadelphia, PA 19107  
            </div>  
        </footer>  
    </div>  
  
    <!-- Feedback Notification -->  
    <div id="notification-wp">Template copied to clipboard!</div>  
  
    <script>  
        function copyTemplateWP() {  
            const text = document.getElementById('template-text-wp').innerText;  
            const textarea = document.createElement('textarea');  
            textarea.value = text;  
            document.body.appendChild(textarea);  
            textarea.select();  
            document.execCommand('copy');  
            document.body.removeChild(textarea);  
  
            const notification = document.getElementById('notification-wp');  
            notification.classList.add('show');  
              
            const btn = document.querySelector('#wp-valuation-support .copy-btn');  
            const originalText = btn.innerText;  
            btn.innerText = 'Copied!';  
            btn.style.background = '#22c55e';  
            btn.style.color = 'white';  
  
            setTimeout(() => {  
                notification.classList.remove('show');  
                btn.innerText = originalText;  
                btn.style.background = '';  
                btn.style.color = '';  
            }, 2500);  
        }  
    </script>  
</div>  
<!-- /wp:html -->  
