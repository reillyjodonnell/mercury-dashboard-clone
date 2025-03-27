'use client';
import { ArrowRight, CreditCard, HelpCircle, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { ArrowDown, ArrowUp } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart';

import useSWR from 'swr';

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

const fetcher = (url: string) =>
  fetch(url).then((res) => {
    return res.json();
  });

export default function FinancialDashboard() {
  const { data } = useSWR(
    'https://mercury-api-production-d371.up.railway.app/data',
    fetcher,
    {
      suspense: true,
    }
  );

  const splitBalance = data?.balance?.balance?.split('.');

  const splitCreditCardBalance = data?.creditCard?.balance.split('.');

  return (
    <div className="grid gap-12">
      <div className="grid gap-6 md:grid-cols-2 items-stretch">
        {/* Balance Card */}
        <Card className="h-full">
          <CardContent className="p-6 h-full flex flex-col ">
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
                {splitBalance[0]}
                <span className="text-2xl">.{splitBalance[1]}</span>
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
                <span className="font-medium">{data.balance.up}</span>
              </div>
              <div className="flex items-center gap-1 text-rose-600">
                <ArrowDown className="h-4 w-4" />
                <span className="font-medium">{data.balance.down}</span>
              </div>
            </div>
            <ChartContainer config={chartConfig} className="h-[152px] w-full">
              <AreaChart
                accessibilityLayer
                data={data.balance.chartData}
                margin={{
                  left: 12,
                  right: 12,
                }}
              >
                <defs>
                  <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                  </linearGradient>
                </defs>
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
                  fill="url(#gradient)"
                  fillOpacity={0.4}
                  stroke="#8884d8"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Accounts Card */}
        <Card className="h-full">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
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
            <div className="">
              {data.accounts.map((account) => (
                <AccountItem
                  title={account.name}
                  amount={account.balance}
                  key={account.id}
                />
              ))}
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
                {splitCreditCardBalance[0]}
                <span className="text-xl">.{splitCreditCardBalance[1]}</span>
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
                <span className="text-muted-foreground">
                  {data.creditCard.available} available
                </span>
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
              <span className="text-sm font-medium">
                {data.creditCard.dueDate}
              </span>
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
    <div className="flex items-center justify-between hover:bg-[#7073930f] p-2 rounded-md">
      <div className="flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 32 32"
          className="min-h-5 min-w-5 mr-3 h-7 w-7"
        >
          <path
            fill="currentColor"
            d="M16 0C7.19155 0 0.0241327 7.1379 0 15.9397V16.0121C0 24.838 7.19155 32 16 32C24.8326 32 32 24.8139 32 16.0121C32 7.16202 24.8326 0 16 0ZM11.994 1.51922C13.2006 1.18161 14.4796 0.988696 15.8069 0.964582C15.8793 0.964582 15.9276 0.964582 16 0.964582C16.0724 0.964582 16.1448 0.964582 16.1931 0.964582C18.2443 1.03693 20.006 2.33911 20.7541 4.12359C20.9231 4.50942 21.0196 4.89525 21.092 5.32931C21.1403 5.57046 21.1403 5.83572 21.1403 6.10098C21.1403 7.25848 20.7541 8.31952 20.1267 9.18764C19.451 8.77769 18.7029 8.4642 17.9306 8.27129C18.5339 7.74077 18.8959 6.9691 18.8959 6.10098C18.8959 5.474 18.7029 4.89525 18.3409 4.41296C17.81 3.68953 16.9653 3.20723 16 3.20723C14.3107 3.20723 12.7179 3.52072 11.2459 4.12359C10.8356 4.29239 10.4495 4.48531 10.0633 4.67822C7.79487 5.88395 5.91252 7.74077 4.70588 10.0317C3.45098 10.321 2.34087 10.9962 1.52036 11.9367C2.94419 6.89676 6.92609 2.91786 11.994 1.51922ZM22.1056 5.88395C23.7466 6.87264 25.1222 8.24717 26.1116 9.88696C26.0392 9.88696 25.9668 9.88696 25.8944 9.88696C24.543 9.88696 23.2881 10.321 22.2745 11.0927C21.8884 10.5863 21.4299 10.1281 20.9231 9.74228C21.6712 8.72947 22.1297 7.47551 22.1297 6.12509C22.1056 6.02864 22.1056 5.95629 22.1056 5.88395ZM27.5837 13.6488C27.1011 13.3112 26.5219 13.0942 25.8944 13.0942C25.0256 13.0942 24.2534 13.4559 23.7225 14.0588C23.264 14.5652 22.9985 15.2404 22.9985 15.9879C22.9985 17.2419 22.6606 18.4235 22.0814 19.4363C21.9125 19.7257 21.7436 19.991 21.5264 20.2562C21.1644 20.7385 20.73 21.1485 20.2715 21.5102C19.6923 20.9314 18.9925 20.4732 18.1961 20.1839C19.0407 19.7498 19.7406 19.0505 20.175 18.2065C20.537 17.5554 20.73 16.7837 20.73 15.9879C20.73 14.6616 21.2368 13.4559 22.0573 12.5396C22.2745 12.2984 22.5158 12.0814 22.7813 11.8644C23.6501 11.2133 24.7119 10.8515 25.8703 10.8515C26.1357 10.8515 26.4012 10.8757 26.6425 10.8998C27.0769 11.7679 27.3906 12.6842 27.5837 13.6488ZM27.825 15.8915C27.825 15.9156 27.825 15.9638 27.825 15.9879C27.825 16.0121 27.825 16.0603 27.825 16.0844C27.7768 17.0972 26.9321 17.9171 25.8944 17.9171C24.8326 17.9171 23.9638 17.049 23.9638 15.9879C23.9638 14.9269 24.8326 14.0588 25.8944 14.0588C26.9321 14.0588 27.7768 14.8787 27.825 15.8915ZM20.9231 22.2577C21.4299 21.8719 21.8884 21.4137 22.2745 20.9073C23.2881 21.6549 24.543 22.0889 25.8944 22.0889C25.9668 22.0889 26.0392 22.0889 26.1116 22.0889C25.1222 23.7287 23.7466 25.1032 22.1056 26.0919C22.1056 26.0196 22.1056 25.9473 22.1056 25.8749C22.1056 24.5245 21.6712 23.2705 20.9231 22.2577ZM17.9306 23.7287C17.4238 23.2705 16.7481 23.0053 16.0241 23.0053C14.7692 23.0053 13.5867 22.6677 12.5732 22.0889C12.2836 21.9201 12.0181 21.7513 11.7526 21.5343C11.27 21.1726 10.8356 20.7385 10.4736 20.2562C11.0528 19.6775 11.5113 18.9781 11.825 18.2065C12.2594 19.0505 12.9593 19.7498 13.8281 20.208C14.4796 20.5697 15.2519 20.7626 16.0483 20.7626C17.3756 20.7626 18.5822 21.269 19.4992 22.0889C19.7406 22.306 19.9578 22.5471 20.175 22.8124C20.8265 23.6805 21.1885 24.7415 21.1885 25.899C21.1885 26.1643 21.1644 26.4054 21.1403 26.6707C20.2715 27.0806 19.3544 27.3941 18.3891 27.587C18.727 27.1047 18.9442 26.526 18.9442 25.899C18.8959 25.0309 18.5098 24.2592 17.9306 23.7287ZM17.9306 25.899C17.9306 26.8877 17.1825 27.7076 16.2172 27.8041C16.1448 27.8041 16.0965 27.8041 16.0241 27.8041C15.9517 27.8041 15.8793 27.8041 15.8311 27.8041C14.8658 27.7076 14.1176 26.8877 14.1176 25.899C14.1176 24.838 14.9864 23.9699 16.0483 23.9699C17.0618 23.9699 17.9306 24.838 17.9306 25.899ZM9.89442 26.0919C8.25339 25.1032 6.85369 23.7046 5.86425 22.0648C5.93665 22.0648 6.03318 22.0648 6.10558 22.0648C7.45701 22.0648 8.71192 21.6307 9.70136 20.8832C10.1116 21.3896 10.5701 21.8478 11.0769 22.2577C10.3288 23.2705 9.87029 24.5245 9.87029 25.8749C9.89442 25.9714 9.89442 26.0437 9.89442 26.0919ZM6.10558 18.8576C6.95023 18.8576 7.72247 18.4959 8.25339 17.893C8.27753 17.8689 8.30166 17.8207 8.32579 17.7965C8.37406 17.7242 8.42232 17.676 8.47059 17.6036C8.49472 17.5795 8.51885 17.5313 8.51885 17.5072C8.54299 17.483 8.54299 17.4589 8.56712 17.4348C8.59125 17.3866 8.61538 17.3384 8.66365 17.2901C8.66365 17.2901 8.66365 17.2901 8.66365 17.266C8.68778 17.2419 8.68778 17.1937 8.71192 17.1696C8.73605 17.1213 8.73605 17.0972 8.76018 17.049C8.76018 17.0249 8.78431 17.0008 8.78431 16.9766C8.80845 16.9525 8.80845 16.9043 8.80845 16.8802C8.83258 16.832 8.83258 16.7596 8.85671 16.7114C8.85671 16.7114 8.85671 16.7114 8.85671 16.6873C8.85671 16.6631 8.88084 16.639 8.88084 16.5908C8.88084 16.5667 8.90498 16.5426 8.90498 16.5185V16.4943C8.90498 16.4702 8.90498 16.4461 8.90498 16.422C8.90498 16.3979 8.90498 16.3738 8.90498 16.3497C8.90498 16.3014 8.90498 16.2532 8.92911 16.205C8.92911 16.1809 8.92911 16.1567 8.92911 16.1326C8.92911 16.0844 8.92911 16.0603 8.92911 16.0121V15.9879C8.92911 14.734 9.26697 13.5524 9.84615 12.5396C10.0151 12.2502 10.184 11.9849 10.4012 11.7197C10.7632 11.2615 11.1735 10.8274 11.6561 10.4657C12.2353 11.0445 12.9351 11.5026 13.7315 11.8161C12.8869 12.2502 12.187 12.9495 11.7526 13.7935C11.3906 14.4446 11.1976 15.1922 11.1976 15.9879V16.0121C11.1976 17.3384 10.6667 18.5441 9.84615 19.4363C9.62896 19.6775 9.38763 19.8945 9.12217 20.0874C8.25339 20.7144 7.21569 21.1002 6.05731 21.1002C5.79185 21.1002 5.52639 21.0761 5.26093 21.052C4.85068 20.1839 4.53695 19.2675 4.34389 18.3029C4.89894 18.6647 5.47813 18.8576 6.10558 18.8576ZM4.17496 15.9879C4.17496 15.9397 4.17496 15.9156 4.17496 15.8674C4.22323 14.8546 5.06787 14.0347 6.10558 14.0347C7.16742 14.0347 8.0362 14.9028 8.0362 15.9638V15.9879C8.01207 17.0249 7.16742 17.8689 6.10558 17.8689C5.04374 17.893 4.19909 17.049 4.17496 15.9879ZM11.0769 9.74228C10.5701 10.1281 10.1357 10.5863 9.74962 11.0686C8.73605 10.321 7.48115 9.86285 6.10558 9.86285C6.03318 9.86285 5.96078 9.86285 5.91252 9.86285C6.90196 8.24717 8.27753 6.87264 9.89442 5.88395C9.89442 5.95629 9.89442 6.02864 9.89442 6.10098C9.89442 7.45139 10.3288 8.70535 11.0769 9.74228ZM14.0935 8.27129C14.6003 8.72946 15.276 8.99473 16.0241 8.99473C17.279 8.99473 18.4615 9.33233 19.4751 9.91108C19.7647 10.0799 20.0302 10.2487 20.2956 10.4657C20.7783 10.8274 21.1885 11.2615 21.5505 11.7197C20.9713 12.2984 20.5128 12.9977 20.2232 13.7935C19.7888 12.9495 19.089 12.2502 18.2443 11.8161C17.5928 11.4544 16.8205 11.2615 16.0241 11.2615C14.6968 11.2615 13.4902 10.7551 12.5732 9.93519C12.3318 9.71816 12.1146 9.47702 11.8974 9.21176C11.2459 8.34363 10.8839 7.28259 10.8839 6.12509C10.8839 5.85983 10.908 5.59457 10.9321 5.35343C11.8009 4.94348 12.7179 4.62999 13.6833 4.43708C13.3454 4.91937 13.1282 5.49812 13.1282 6.12509C13.1041 6.9691 13.4902 7.74077 14.0935 8.27129ZM14.0694 6.10098C14.0694 5.06405 14.8899 4.22005 15.9035 4.17182C15.9276 4.17182 15.9759 4.17182 16 4.17182C16.0241 4.17182 16.0724 4.17182 16.0965 4.17182C17.1101 4.22005 17.9306 5.06405 17.9306 6.10098C17.9306 7.16202 17.0618 8.03014 16 8.03014C14.9382 8.03014 14.0694 7.16202 14.0694 6.10098ZM19.7888 15.9879C19.7888 18.0859 18.0995 19.7739 16 19.7739C13.9005 19.7739 12.2112 18.0859 12.2112 15.9879V15.9638C12.2353 13.89 13.9246 12.202 16 12.202C18.0754 12.202 19.7888 13.9141 19.7888 15.9879ZM1.49623 19.9668C1.15837 18.7611 0.989442 17.5072 0.965309 16.205C0.965309 16.1326 0.965309 16.0844 0.965309 16.0121V15.9638C0.965309 15.8915 0.965309 15.8433 0.965309 15.7709C1.06184 13.7212 2.34087 11.9849 4.15083 11.2374C4.53695 11.0927 4.92308 10.9721 5.35747 10.8998C5.59879 10.8515 5.86425 10.8515 6.10558 10.8515C7.26395 10.8515 8.32579 11.2374 9.19457 11.8885C8.78431 12.5637 8.47059 13.3112 8.27753 14.0829C7.74661 13.48 6.97436 13.1183 6.10558 13.1183C5.47813 13.1183 4.89894 13.3112 4.41629 13.6488C3.69231 14.1794 3.20965 15.0234 3.20965 15.9638V16.0121C3.20965 17.676 3.52338 19.2675 4.10256 20.7144C4.27149 21.1243 4.44042 21.5102 4.65762 21.896C5.86425 24.211 7.74661 26.0919 10.0392 27.2977C10.3288 28.5516 11.0287 29.6609 11.9698 30.4808C6.90196 29.0821 2.89593 25.055 1.49623 19.9668ZM20.0302 30.4808C18.8235 30.8184 17.5445 31.0113 16.2172 31.0113C16.1448 31.0113 16.0965 31.0113 16.0241 31.0113C15.9517 31.0113 15.8793 31.0113 15.8311 31.0113C13.7798 30.939 12.0181 29.6368 11.27 27.8523C11.1011 27.4665 11.0045 27.0806 10.9321 26.6466C10.8839 26.4054 10.8839 26.1402 10.8839 25.8749C10.8839 24.7174 11.27 23.6564 11.8974 22.7882C12.5732 23.1982 13.3213 23.5117 14.0935 23.7046C13.4902 24.2351 13.1282 25.0068 13.1282 25.8749C13.1282 26.5019 13.3213 27.0806 13.6833 27.5629C14.1659 28.2381 14.914 28.6963 15.7828 28.7687H15.8069C15.8793 28.7687 15.9517 28.7687 16.0241 28.7687C16.0965 28.7687 16.1689 28.7687 16.2413 28.7687H16.2655C17.8582 28.7445 19.3786 28.4069 20.7783 27.8523C21.1885 27.6835 21.5747 27.5147 21.9608 27.2977C24.2534 26.0919 26.1357 24.211 27.3424 21.9201C28.5973 21.6307 29.7074 20.9314 30.5038 19.991C29.1041 25.0791 25.098 29.0821 20.0302 30.4808ZM31.0347 15.9879C31.0347 16.0603 31.0347 16.1085 31.0347 16.1809C30.9623 18.2306 29.6591 19.9668 27.8733 20.7144C27.4872 20.8832 27.1011 20.9797 26.6667 21.052C26.4253 21.1002 26.1599 21.1002 25.8944 21.1002C24.736 21.1002 23.6742 20.7144 22.8296 20.0874C23.2398 19.4122 23.5535 18.6647 23.7466 17.893C24.2775 18.4959 25.0498 18.8576 25.9186 18.8576C26.546 18.8576 27.1252 18.6405 27.6078 18.3029C28.3318 17.7724 28.8145 16.9284 28.8145 15.9638C28.8145 14.2999 28.5008 12.6843 27.8974 11.2133C27.7285 10.8033 27.5354 10.4175 27.3424 10.0317C26.1357 7.74077 24.2534 5.85983 21.9608 4.65411C21.6712 3.40015 20.9713 2.29088 20.0302 1.47099C25.098 2.86963 29.1041 6.87265 30.5038 11.9367C30.8416 13.1424 31.0347 14.4205 31.0347 15.7468C31.0347 15.8433 31.0347 15.9156 31.0347 15.9879Z"
          ></path>
        </svg>
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
