import { ReactNode } from "react";
import {Card, SectionContainer} from "tp-kit/components";
import prisma from "../../utils/prisma";
import { OrderTable } from "../../components/order-table";

export default async function Layout({ children }: { children: ReactNode }) {
  const orders = await prisma.order.findMany();

  return (
    <div
        className="flex"
    >

      <div
        className="basis-2/5 bg-coffee-50"
      >
        <Card
          className="w-full py-24"
        >
          {children}
        </Card>
      </div>
      {/* Orders list */}
      <SectionContainer wrapperClassName="py-24 min-h-[80vh]" className="basis-3/5">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <OrderTable orders={orders} />
        </div>
      </SectionContainer>

      {/* Children */}
    </div>
  );
}
