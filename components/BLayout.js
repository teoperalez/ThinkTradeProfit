import PageMeta from "./pagemeta"

export default function BLayout({ preview, children }) {
  return (
    <>
      <PageMeta title="ThinkTradeProfit.com || " description="Strategies for the Intelligent Trader" tags="investing, forex, stocks, techncal analysis, charts, trading signals, trading indicators, backtesting" /> 
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
    </>
  )
}