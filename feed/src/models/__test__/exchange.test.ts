import { Exchange } from "../exchange";

it("implements optimistic concurrency control", async () => {
  const exchange = Exchange.build({
    name: "exchange_name",
  });

  await exchange.save();

  const firstInstance = await Exchange.findById(exchange.id);
  const secondInstance = await Exchange.findById(exchange.id);

  firstInstance!.set({ price: 10 });
  secondInstance!.set({ price: 15 });

  await firstInstance!.save();

  // expect an error - trying to save same version
  try {
    await secondInstance!.save();
    throw new Error("must throw VersionError");
  } catch (error) {
    const errorType = (error as Error).name;
    expect(errorType).toEqual("VersionError");
  }
});

it('increaments the version nubmer on multiple saves', async () => {
    const ticket = Ticket.build({
        title: 'concert',
        price: 20,
        userId: '123',
    });

    await ticket.save();
    expect(ticket.version).toEqual(0);

    await ticket.save();
    expect(ticket.version).toEqual(1);
    
    await ticket.save();
    expect(ticket.version).toEqual(2);
});