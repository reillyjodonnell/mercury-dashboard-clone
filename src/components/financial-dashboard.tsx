'use client';
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CreditCard,
  HelpCircle,
  Plus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';

import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

import { type ChartConfig } from '@/components/ui/chart';

const chartConfig = {
  desktop: {
    label: 'Desktop',
    color: '#2563eb',
  },
  mobile: {
    label: 'Mobile',
    color: '#60a5fa',
  },
} satisfies ChartConfig;

const chartData = [
  { month: 'January', desktop: 186 },
  { month: 'February', desktop: 305 },
  { month: 'March', desktop: 237 },
  { month: 'April', desktop: 73 },
  { month: 'May', desktop: 209 },
  { month: 'June', desktop: 214 },
];

export default function FinancialDashboard() {
  return (
    <div className="grid gap-12">
      <div className="grid gap-6 md:grid-cols-2 ">
        {/* Balance Card */}
        <Card className="h-[350px]">
          <CardContent className="p-6 h-full ">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h3 className=" font-medium text-muted-foreground">
                  Mercury balance
                </h3>
                <Badge
                  variant="outline"
                  className="bg-indigo-100 text-indigo-600 border-indigo-200"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-indigo-600"
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </Badge>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="20" x2="18" y2="10"></line>
                    <line x1="12" y1="20" x2="12" y2="4"></line>
                    <line x1="6" y1="20" x2="6" y2="14"></line>
                  </svg>
                </Button>
                <Button variant="outline" size="icon" className="h-8 w-8">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="3"
                      y="3"
                      width="18"
                      height="18"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="mb-4">
              <h2 className="text-3xl">
                $5,216,471<span className="text-2xl">.18</span>
              </h2>
              <div className="flex items-center gap-2 mt-2">
                <span className="text-sm text-muted-foreground">
                  Last 30 days
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-1 text-emerald-600">
                <ArrowUp className="h-4 w-4" />
                <span className="font-medium">$1.7M</span>
              </div>
              <div className="flex items-center gap-1 text-rose-600">
                <ArrowDown className="h-4 w-4" />
                <span className="font-medium">-$418K</span>
              </div>
            </div>
            <ChartContainer config={chartConfig}>
              <AreaChart
                accessibilityLayer
                data={chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 3)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Area
                  dataKey="desktop"
                  type="natural"
                  fill="var(--color-desktop)"
                  fillOpacity={0.4}
                  stroke="var(--color-desktop)"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Accounts Card */}
        <Card className="h-[350px]">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg ">Accounts</h3>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="space-y-4">
              <AccountItem title="Credit Card" amount="$12,505.87" />
              <AccountItem title="Treasury" amount="$200,000.00" />
              <AccountItem title="Ops / Payroll" amount="$2,023,267.12" />
              <AccountItem title="AP" amount="$226,767.82" />
              <AccountItem title="AR" amount="$0.00" />
              <div className="flex items-center gap-2 mt-6 text-sm text-muted-foreground">
                <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gray-100 text-xs">
                  +2
                </div>
                <span>View all accounts</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {/* Credit Card */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium">Credit Card</h3>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <CreditCard className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </Button>
              </div>
            </div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold">
                $12,505<span className="text-xl">.87</span>
              </h2>
            </div>
            <div className="w-full h-2 bg-gray-100 rounded-full mb-4">
              <div
                className="h-2 bg-indigo-500 rounded-full"
                style={{ width: '40%' }}
              ></div>
            </div>
            <div className="flex justify-between text-sm mb-6">
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                <span>Balance</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-gray-300"></div>
                <span>Pending</span>
              </div>
              <div>
                <span className="text-muted-foreground">$21,249 available</span>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-muted-foreground"
                >
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="M12 6v6l4 2"></path>
                </svg>
                <span className="text-sm text-muted-foreground">Autopay</span>
              </div>
              <span className="text-sm font-medium">Mar 31</span>
              <Button className="rounded-full px-6">Pay</Button>
            </div>
          </CardContent>
        </Card>

        {/* Bill Pay */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">Bill Pay</h3>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </Button>
              </div>
            </div>
            <Tabs defaultValue="outstanding">
              <TabsList className="grid grid-cols-3 mb-6">
                <TabsTrigger value="outstanding">Outstanding</TabsTrigger>
                <TabsTrigger value="overdue">Overdue</TabsTrigger>
                <TabsTrigger value="duesoon">Due soon</TabsTrigger>
              </TabsList>
              <TabsContent value="outstanding" className="mt-0">
                <div className="text-2xl font-medium mb-8">11</div>
              </TabsContent>
              <TabsContent value="overdue" className="mt-0">
                <div className="text-2xl font-medium mb-8">1</div>
              </TabsContent>
              <TabsContent value="duesoon" className="mt-0">
                <div className="text-2xl font-medium mb-8">-</div>
              </TabsContent>
            </Tabs>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium mb-1">Inbox</h4>
                <p className="text-sm text-muted-foreground">3 bills</p>
              </div>
              <Button
                variant="ghost"
                className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 px-0"
              >
                <span>View</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Invoicing */}
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium">Invoicing</h3>
              <div className="flex gap-2">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <Plus className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="1"></circle>
                    <circle cx="19" cy="12" r="1"></circle>
                    <circle cx="5" cy="12" r="1"></circle>
                  </svg>
                </Button>
              </div>
            </div>
            <Tabs defaultValue="overdue">
              <TabsList className="grid grid-cols-2 mb-6">
                <TabsTrigger value="overdue">Overdue</TabsTrigger>
                <TabsTrigger value="paid">Paid</TabsTrigger>
              </TabsList>
              <TabsContent value="overdue" className="mt-0">
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-2xl font-medium">4</span>
                  <span className="text-lg font-medium text-muted-foreground">
                    ·
                  </span>
                  <span className="text-lg font-medium">
                    $950<span className="text-sm">.00</span>
                  </span>
                </div>
              </TabsContent>
              <TabsContent value="paid" className="mt-0">
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-2xl font-medium">12</span>
                  <span className="text-lg font-medium text-muted-foreground">
                    ·
                  </span>
                  <span className="text-lg font-medium">$6K</span>
                </div>
              </TabsContent>
            </Tabs>
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-medium mb-1">Open</h4>
                <p className="text-sm text-muted-foreground">
                  12 invoices · $12.3K
                </p>
              </div>
              <Button
                variant="ghost"
                className="text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50 px-0"
              >
                <span>View</span>
                <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Money Movement */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold">Money movement</h2>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-1"
              >
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </Button>
            <span className="text-sm font-medium">Mar 2025</span>
            <Button variant="ghost" size="sm" className="h-8">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="ml-1"
              >
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Button>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Money In */}
          <Card>
            <CardContent className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-medium mb-2">Money in</h3>
                <div className="text-3xl font-bold text-emerald-600">
                  $1,691,344<span className="text-xl">.53</span>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-4">Top sources</h4>
                <div className="space-y-4">
                  <MoneyItem
                    icon="VD"
                    title="Venture Debt Loan"
                    amount="$1,000,000.00"
                    iconBg="bg-gray-100"
                    positive={true}
                  />
                  <MoneyItem
                    icon="G"
                    title="GenPro"
                    amount="$414,983.19"
                    iconBg="bg-gray-100"
                    positive={true}
                  />
                  <MoneyItem
                    icon={
                      <svg viewBox="0 0 24 24" className="h-4 w-4">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                    }
                    title="Google"
                    amount="$66,651.08"
                    iconBg="bg-white"
                    positive={true}
                  />
                  <MoneyItem
                    icon="MB"
                    title="Milgram Brokerage"
                    amount="$58,164.93"
                    iconBg="bg-gray-100"
                    positive={true}
                  />
                </div>
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-sm text-muted-foreground pl-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                    View all
                  </Button>
                </div>
              </div>
              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">
                  Last 3 months average
                </h4>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-medium">$39.5K</div>
                  <div className="w-24 h-8">
                    <svg viewBox="0 0 100 30" className="w-full h-full">
                      <path
                        d="M0,15 C5,13 10,17 15,15 C20,13 25,17 30,15 C35,13 40,17 45,15 C50,13 55,17 60,15 C65,13 70,17 75,15 C80,13 85,17 90,15 C95,13 100,17 105,15"
                        fill="none"
                        stroke="#10b981"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Money Out */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium">Money out</h3>
                <HelpCircle className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className="mb-6">
                <div className="text-3xl font-bold text-rose-600">
                  -$395,014<span className="text-xl">.22</span>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-sm font-medium mb-4">Top spend</h4>
                <div className="space-y-4">
                  <MoneyItem
                    icon="JO"
                    title="Jordi O'Donnell"
                    amount="-$90,797.16"
                    iconBg="bg-blue-100"
                    positive={false}
                  />
                  <MoneyItem
                    icon="GP"
                    title="Gusto (Payroll)"
                    amount="-$90,122.53"
                    iconBg="bg-blue-100"
                    positive={false}
                  />
                  <MoneyItem
                    icon={
                      <svg viewBox="0 0 24 24" className="h-4 w-4">
                        <path
                          d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                          fill="#4285F4"
                        />
                        <path
                          d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                          fill="#34A853"
                        />
                        <path
                          d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                          fill="#FBBC05"
                        />
                        <path
                          d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                          fill="#EA4335"
                        />
                      </svg>
                    }
                    title="Google"
                    amount="-$67,572.59"
                    iconBg="bg-white"
                    positive={false}
                  />
                  <MoneyItem
                    icon="MB"
                    title="Milgram Brokerage"
                    amount="-$52,099.06"
                    iconBg="bg-blue-100"
                    positive={false}
                  />
                </div>
                <div className="mt-4">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-sm text-muted-foreground pl-0"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-1"
                    >
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                    View all
                  </Button>
                </div>
              </div>
              <div className="pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">
                  Last 3 months average
                </h4>
                <div className="flex items-center justify-between">
                  <div className="text-xl font-medium text-rose-600">
                    -$139K
                  </div>
                  <div className="w-24 h-8">
                    <svg viewBox="0 0 100 30" className="w-full h-full">
                      <path
                        d="M0,15 C5,17 10,13 15,15 C20,17 25,13 30,15 C35,17 40,13 45,15 C50,17 55,13 60,15 C65,17 70,13 75,15 C80,17 85,13 90,15 C95,17 100,13 105,15"
                        fill="none"
                        stroke="#e11d48"
                        strokeWidth="2"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Recent Transactions */}
      <div>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-bold flex items-center">
            Recent transactions
            <ArrowRight className="ml-2 h-5 w-5 text-muted-foreground" />
          </h2>
        </div>

        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-4 font-medium text-sm text-muted-foreground">
                      Date
                    </th>
                    <th className="text-left p-4 font-medium text-sm text-muted-foreground">
                      To/From
                    </th>
                    <th className="text-right p-4 font-medium text-sm text-muted-foreground">
                      Amount
                    </th>
                    <th className="text-left p-4 font-medium text-sm text-muted-foreground">
                      Account
                    </th>
                    <th className="text-left p-4 font-medium text-sm text-muted-foreground flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-1"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="16" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12.01" y2="8"></line>
                      </svg>
                      Payment Method
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <TransactionRow
                    date="Mar 26"
                    icon="P"
                    iconBg="bg-blue-100"
                    description="Payment from Acme Corp"
                    amount="$200.00"
                    account="AR"
                    paymentMethod={
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                        Request or Invoice Payment
                      </div>
                    }
                    positive={true}
                  />
                  <TransactionRow
                    date="Mar 26"
                    icon="P"
                    iconBg="bg-blue-100"
                    description="Payment from NASA"
                    badge="Failed"
                    amount="$419.00"
                    account="AR"
                    paymentMethod={
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                        Request or Invoice Payment
                      </div>
                    }
                    positive={true}
                  />
                  <TransactionRow
                    date="Mar 26"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="4"></circle>
                      </svg>
                    }
                    iconBg="bg-gray-100"
                    description="Mercury Working Capital"
                    amount="-$2,200.00"
                    account="Ops / Payroll"
                    paymentMethod={
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                        Working Capital Loan
                      </div>
                    }
                    positive={false}
                  />
                  <TransactionRow
                    date="Mar 26"
                    icon="LE"
                    iconBg="bg-blue-100"
                    description="Lily's Eatery"
                    amount="$0.93"
                    account="Ops / Payroll"
                    paymentMethod={
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <rect
                            x="2"
                            y="5"
                            width="20"
                            height="14"
                            rx="2"
                          ></rect>
                          <line x1="2" y1="10" x2="22" y2="10"></line>
                        </svg>
                        Jane B. ••1234
                      </div>
                    }
                    positive={true}
                  />
                  <TransactionRow
                    date="Mar 26"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="4"></circle>
                      </svg>
                    }
                    iconBg="bg-gray-100"
                    description="From AR"
                    amount="$54,810.16"
                    account="Ops / Payroll"
                    paymentMethod={
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <line x1="7" y1="17" x2="17" y2="7"></line>
                          <polyline points="7 7 17 7 17 17"></polyline>
                        </svg>
                        Transfer
                      </div>
                    }
                    positive={true}
                  />
                  <TransactionRow
                    date="Mar 26"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <circle cx="12" cy="12" r="4"></circle>
                      </svg>
                    }
                    iconBg="bg-gray-100"
                    description="To Ops / Payroll"
                    amount="-$54,810.16"
                    account="AR"
                    paymentMethod={
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                          <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                        Transfer
                      </div>
                    }
                    positive={false}
                  />
                  <TransactionRow
                    date="Mar 26"
                    icon="D7"
                    iconBg="bg-blue-100"
                    description="Deli 77"
                    amount="$6.91"
                    account="Credit account"
                    paymentMethod={
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <rect
                            x="2"
                            y="5"
                            width="20"
                            height="14"
                            rx="2"
                          ></rect>
                          <line x1="2" y1="10" x2="22" y2="10"></line>
                        </svg>
                        Jane B. ••5555
                      </div>
                    }
                    positive={true}
                  />
                  <TransactionRow
                    date="Mar 26"
                    icon="D7"
                    iconBg="bg-blue-100"
                    description="Deli 77"
                    amount="$23.28"
                    account="Ops / Payroll"
                    paymentMethod={
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <rect
                            x="2"
                            y="5"
                            width="20"
                            height="14"
                            rx="2"
                          ></rect>
                          <line x1="2" y1="10" x2="22" y2="10"></line>
                        </svg>
                        Landon S. ••4929
                      </div>
                    }
                    positive={true}
                  />
                  <TransactionRow
                    date="Mar 26"
                    icon="OS"
                    iconBg="bg-blue-100"
                    description="Office Stop Co."
                    amount="-$287.89"
                    account="Ops / Payroll"
                    paymentMethod={
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <rect
                            x="2"
                            y="5"
                            width="20"
                            height="14"
                            rx="2"
                          ></rect>
                          <line x1="2" y1="10" x2="22" y2="10"></line>
                        </svg>
                        Jessica A. ••9914
                      </div>
                    }
                    positive={false}
                  />
                  <TransactionRow
                    date="Mar 26"
                    icon={
                      <div className="flex items-center justify-center h-full w-full bg-red-500 text-white text-xs font-bold">
                        TJ
                      </div>
                    }
                    iconBg=""
                    description="Trader John's"
                    amount="$53.49"
                    account="Credit account"
                    paymentMethod={
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-2"
                        >
                          <rect
                            x="2"
                            y="5"
                            width="20"
                            height="14"
                            rx="2"
                          ></rect>
                          <line x1="2" y1="10" x2="22" y2="10"></line>
                        </svg>
                        Landon S. ••0331
                      </div>
                    }
                    positive={true}
                  />
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

// Helper Components
function AccountItem({ title, amount }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-gray-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10"></circle>
            <circle cx="12" cy="12" r="4"></circle>
          </svg>
        </div>
        <span className="">{title}</span>
      </div>
      <span className="">{amount}</span>
    </div>
  );
}

function MoneyItem({ icon, title, amount, iconBg, positive }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div
          className={`flex items-center justify-center h-8 w-8 rounded-full ${iconBg}`}
        >
          {typeof icon === 'string' ? (
            <span className="text-xs font-medium">{icon}</span>
          ) : (
            icon
          )}
        </div>
        <span className="font-medium">{title}</span>
      </div>
      <span
        className={`font-medium ${
          positive ? 'text-emerald-600' : 'text-rose-600'
        }`}
      >
        {amount}
      </span>
    </div>
  );
}

function TransactionRow({
  date,
  icon,
  iconBg,
  description,
  badge,
  amount,
  account,
  paymentMethod,
  positive,
}) {
  return (
    <tr className="border-b hover:bg-muted/10">
      <td className="p-4 text-sm">{date}</td>
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div
            className={`flex items-center justify-center h-8 w-8 rounded-full ${iconBg}`}
          >
            {typeof icon === 'string' ? (
              <span className="text-xs font-medium">{icon}</span>
            ) : (
              icon
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className="font-medium">{description}</span>
            {badge && (
              <span className="px-2 py-0.5 text-xs font-medium bg-rose-100 text-rose-600 rounded">
                {badge}
              </span>
            )}
          </div>
        </div>
      </td>
      <td
        className={`p-4 text-right font-medium ${
          positive ? 'text-emerald-600' : 'text-rose-600'
        }`}
      >
        {amount}
      </td>
      <td className="p-4 text-sm">{account}</td>
      <td className="p-4 text-sm">{paymentMethod}</td>
    </tr>
  );
}
