'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronUp, DollarSign, PieChart, TrendingUp, Shield, Users, Briefcase, BarChart2, Scale, Clock } from 'lucide-react'

const MutualFundCheatsheet: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900">Mutual Fund Cheatsheet</h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <CheatsheetSection
              title="What is a Mutual Fund?"
              icon={<PieChart className="h-6 w-6" />}
              content={[
                "A professionally managed investment fund that pools money from many investors to purchase securities",
                "Can invest in stocks, bonds, short-term debt, or other securities",
                "Managed by professional fund managers",
                "Allows small investors to access diversified, professionally managed portfolios"
              ]}
            />
            <CheatsheetSection
              title="Types of Mutual Funds"
              icon={<Briefcase className="h-6 w-6" />}
              content={[
                "Equity Funds: Invest primarily in stocks",
                "Bond Funds: Invest in fixed income securities",
                "Money Market Funds: Invest in short-term debt securities",
                "Balanced Funds: Invest in both stocks and bonds",
                "Index Funds: Track a specific market index",
                "Sector Funds: Focus on a particular industry or sector"
              ]}
            />
            <CheatsheetSection
              title="Key Terms"
              icon={<DollarSign className="h-6 w-6" />}
              content={[
                "NAV (Net Asset Value): Price per share of a mutual fund",
                "Expense Ratio: Annual fee charged by the fund",
                "Load: Sales charge or commission",
                "Yield: Income returned on an investment",
                "Diversification: Spreading investments to manage risk",
                "Rebalancing: Adjusting portfolio to maintain desired asset allocation"
              ]}
            />
            <CheatsheetSection
              title="Benefits of Mutual Funds"
              icon={<TrendingUp className="h-6 w-6" />}
              content={[
                "Professional Management: Experts make investment decisions",
                "Diversification: Reduced risk through varied investments",
                "Accessibility: Start investing with relatively small amounts",
                "Liquidity: Easily buy or sell shares",
                "Variety: Wide range of investment options",
                "Transparency: Regular reporting and disclosure"
              ]}
            />
            <CheatsheetSection
              title="Risks of Mutual Funds"
              icon={<Shield className="h-6 w-6" />}
              content={[
                "Market Risk: Value can fluctuate with market conditions",
                "Interest Rate Risk: Changes in interest rates can affect bond funds",
                "Credit Risk: Possibility of default in bond investments",
                "Inflation Risk: Returns may not keep pace with inflation",
                "Manager Risk: Poor decisions by fund manager can lead to losses",
                "Currency Risk: For funds investing internationally"
              ]}
            />
            <CheatsheetSection
              title="How to Invest in Mutual Funds"
              icon={<Users className="h-6 w-6" />}
              content={[
                "1. Determine your financial goals and risk tolerance",
                "2. Research different types of mutual funds",
                "3. Compare fund performance, fees, and management",
                "4. Choose between lump sum investment or SIP (Systematic Investment Plan)",
                "5. Open an account with a fund company or through a broker",
                "6. Monitor your investments regularly and rebalance as needed"
              ]}
            />
            <CheatsheetSection
              title="Performance Metrics"
              icon={<BarChart2 className="h-6 w-6" />}
              content={[
                "Total Return: Overall gain or loss over a specific period",
                "Alpha: Excess return of the fund relative to the benchmark",
                "Beta: Measure of the volatility of a fund in comparison to the market",
                "Sharpe Ratio: Measure of risk-adjusted return",
                "R-squared: How closely the fund's performance correlates to the benchmark",
                "Standard Deviation: Measure of the fund's volatility"
              ]}
            />
            <CheatsheetSection
              title="Tax Considerations"
              icon={<Scale className="h-6 w-6" />}
              content={[
                "Capital Gains Tax: On profits from selling fund shares",
                "Dividend Tax: On distributions from the fund",
                "Tax-Efficient Funds: Aim to minimize taxable distributions",
                "Tax-Advantaged Accounts: Special accounts with tax benefits for retirement or education savings",
                "Harvest Tax Losses: Selling funds at a loss to offset gains",
                "Consult a Tax Professional: For personalized advice"
              ]}
            />
            <CheatsheetSection
              title="Common Strategies"
              icon={<Clock className="h-6 w-6" />}
              content={[
                "Dollar-Cost Averaging: Investing a fixed amount regularly",
                "Asset Allocation: Dividing investments among different asset classes",
                "Portfolio Rebalancing: Periodically adjusting your portfolio",
                "Core and Satellite: Combining index funds with actively managed funds",
                "Fund of Funds: Investing in a fund that holds other mutual funds",
                "Target-Date Funds: Automatically adjusts asset allocation over time"
              ]}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

interface CheatsheetSectionProps {
  title: string
  icon: React.ReactNode
  content: string[]
}

const CheatsheetSection: React.FC<CheatsheetSectionProps> = ({ title, icon, content }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="bg-white overflow-hidden shadow rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <div className="flex items-center justify-between cursor-pointer" onClick={() => setIsExpanded(!isExpanded)}>
          <div className="flex items-center">
            <div className="flex-shrink-0 text-blue-500">{icon}</div>
            <h3 className="ml-3 text-lg font-medium text-gray-900">{title}</h3>
          </div>
          {isExpanded ? <ChevronUp className="h-5 w-5 text-gray-500" /> : <ChevronDown className="h-5 w-5 text-gray-500" />}
        </div>
        {isExpanded && (
          <div className="mt-4">
            <ul className="list-disc pl-5 space-y-2">
              {content.map((item, index) => (
                <li key={index} className="text-sm text-gray-600">{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}

export default MutualFundCheatsheet

