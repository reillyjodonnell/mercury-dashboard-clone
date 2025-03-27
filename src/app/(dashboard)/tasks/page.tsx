import { User, Send, RefreshCw, BarChart } from 'lucide-react';

export default function TasksComponent() {
  return (
    <div className="w-full max-w-[968px] mx-auto">
      <h1 className="text-2xl font-medium mb-4">Tasks</h1>

      <div className="flex space-x-2 mb-6">
        <button className="px-4 py-2 bg-slate-100 text-slate-900 rounded-md font-medium">
          Incomplete
        </button>
        <button className="px-4 py-2 text-slate-600 rounded-md font-medium hover:bg-slate-50">
          Completed
        </button>
      </div>

      <div className="rounded-lg overflow-hidden">
        <div className="grid grid-cols-12 px-4 py-3 border-b text-sm text-slate-500">
          <div className="col-span-7">Description</div>
          <div className="col-span-3 text-right">Due by</div>
          <div className="col-span-2 text-right">Received</div>
        </div>

        <div className="divide-y">
          <div className="grid grid-cols-12 px-4 py-4 items-center">
            <div className="col-span-7 flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 text-slate-500">
                <User className="w-5 h-5" />
              </div>
              <span>
                Approve team invite for James King{' '}
                <span className="text-slate-500">
                  (requested by Landon Shepherd)
                </span>
              </span>
            </div>
            <div className="col-span-3 text-right text-slate-600">Mar 25</div>
            <div className="col-span-2 text-right"></div>
          </div>

          <div className="grid grid-cols-12 px-4 py-4 items-center">
            <div className="col-span-7 flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 text-slate-500">
                <Send className="w-5 h-5" />
              </div>
              <span>
                Approve $1,042.95 payment to Jason Green{' '}
                <span className="text-slate-500">(requested by Aluna T.)</span>
              </span>
            </div>
            <div className="col-span-3 text-right text-slate-600">Mar 25</div>
            <div className="col-span-2 text-right"></div>
          </div>

          <div className="grid grid-cols-12 px-4 py-4 items-center">
            <div className="col-span-7 flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 text-slate-500">
                <RefreshCw className="w-5 h-5" />
              </div>
              <span>
                Approve $5,000.00 recurring payment to Jason Green{' '}
                <span className="text-slate-500">(requested by Aluna T.)</span>
              </span>
            </div>
            <div className="col-span-3 text-right text-slate-600">Mar 25</div>
            <div className="col-span-2 text-right"></div>
          </div>

          <div className="grid grid-cols-12 px-4 py-4 items-center">
            <div className="col-span-7 flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 text-slate-500">
                <BarChart className="w-5 h-5" />
              </div>
              <span>
                Approve new daily maximum payment limit{' '}
                <span className="text-slate-500">
                  (requested by Landon Shepherd)
                </span>
              </span>
            </div>
            <div className="col-span-3 text-right text-slate-600">Mar 25</div>
            <div className="col-span-2 text-right"></div>
          </div>

          <div className="grid grid-cols-12 px-4 py-4 items-center">
            <div className="col-span-7 flex items-center gap-3">
              <div className="flex-shrink-0 w-6 h-6 text-slate-500">
                <BarChart className="w-5 h-5" />
              </div>
              <span>
                Approve enabling the dual admin approval policy{' '}
                <span className="text-slate-500">
                  (requested by Landon Shepherd)
                </span>
              </span>
            </div>
            <div className="col-span-3 text-right text-slate-600">Mar 25</div>
            <div className="col-span-2 text-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
