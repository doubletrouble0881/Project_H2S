import type React from "react"
import { useState } from "react"
import {
  AppBar,
  Toolbar,
  Typography,
  Card,
  CardContent,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
} from "@mui/material"
import {
  ExitToApp as ExitIcon,
  TrendingUp as NavIcon,
  AccountBalance as ExpenseIcon,
  Close as CloseIcon,
} from "@mui/icons-material"

interface TermInfo {
  icon: React.ReactElement
  title: string
  description: string
  modalContent: string
}

const terms: TermInfo[] = [
  {
    icon: <ExitIcon />,
    title: "Exit Load",
    description: "Fee for early withdrawal from your investment",
    modalContent:
      "Exit Load is a fee charged when you withdraw your investment before a specified period. This fee encourages long-term investment and is usually a small percentage of the amount withdrawn. It helps the fund manage liquidity and discourages frequent trading, which can impact the fund's performance.",
  },
  {
    icon: <NavIcon />,
    title: "NAV",
    description: "Current value of one unit of your investment",
    modalContent:
      "NAV (Net Asset Value) represents the per-unit market value of a mutual fund. It is calculated daily based on the market value of the fund's assets minus its liabilities, divided by the number of outstanding units. NAV is crucial for determining the purchase and redemption price of mutual fund units.",
  },
  {
    icon: <ExpenseIcon />,
    title: "Expense Ratio",
    description: "Annual cost for managing your investment",
    modalContent:
      "The Expense Ratio is the annual fee charged by the mutual fund for managing your investment. It covers costs like fund management, administration, marketing, and other operational expenses. Expressed as a percentage of your investment, a lower expense ratio means more of your money is actually invested in the fund.",
  },
]

const MutualFundInfoPage: React.FC = () => {
  const [openModal, setOpenModal] = useState<number | null>(null)

  const handleOpenModal = (index: number) => {
    setOpenModal(index)
  }

  const handleCloseModal = () => {
    setOpenModal(null)
  }

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <AppBar position="static" className="bg-transparent shadow-none">
        <Toolbar>
          <div className="w-full text-center py-4">
            <Typography
              variant="h4"
              component="h1"
              className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500"
            >
              InvestSmart
            </Typography>
            <Typography variant="subtitle1" className="text-gray-300 mt-2">
              Demystifying Your Investments
            </Typography>
          </div>
        </Toolbar>
      </AppBar>

      <main className="flex-grow container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {terms.map((term, index) => (
            <Card
              key={index}
              className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              <CardContent className="flex flex-col items-center text-center p-6">
                <div className="text-5xl mb-6 text-blue-400">{term.icon}</div>
                <Typography variant="h5" component="h2" className="mb-3 font-semibold text-gray-100">
                  {term.title}
                </Typography>
                <Typography variant="body2" className="mb-6 text-gray-400">
                  {term.description}
                </Typography>
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={() => handleOpenModal(index)}
                  className="mt-auto py-2 px-6 rounded-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-gray-900 transition-colors duration-300"
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      <footer className="bg-gray-900 py-6 border-t border-gray-800">
        <Typography variant="body2" align="center" className="text-gray-500">
          © 2023 InvestSmart. All rights reserved.
        </Typography>
      </footer>

      {terms.map((term, index) => (
        <Dialog
          key={index}
          open={openModal === index}
          onClose={handleCloseModal}
          aria-labelledby={`modal-title-${index}`}
          PaperProps={{
            style: {
              backgroundColor: "#1f2937",
              color: "#e5e7eb",
              borderRadius: "0.75rem",
            },
          }}
        >
          <DialogTitle id={`modal-title-${index}`} className="border-b border-gray-700 pb-3">
            <Typography variant="h6" component="h2" className="text-blue-400 flex items-center">
              {term.icon}
              <span className="ml-3">{term.title}</span>
            </Typography>
          </DialogTitle>
          <DialogContent className="mt-4">
            <Typography className="text-gray-300">{term.modalContent}</Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleCloseModal}
              color="primary"
              className="rounded-full px-6 py-2 bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-300"
            >
              Close
            </Button>
          </DialogActions>
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </Dialog>
      ))}
    </div>
  )
}

export default MutualFundInfoPage

