import assert from "assert";
import { 
  TestHelpers,
  StakeToken_Approval
} from "generated";
const { MockDb, StakeToken } = TestHelpers;

describe("StakeToken contract Approval event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for StakeToken contract Approval event
  const event = StakeToken.Approval.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("StakeToken_Approval is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await StakeToken.Approval.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualStakeTokenApproval = mockDbUpdated.entities.StakeToken_Approval.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedStakeTokenApproval: StakeToken_Approval = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      owner: event.params.owner,
      spender: event.params.spender,
      value: event.params.value,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualStakeTokenApproval, expectedStakeTokenApproval, "Actual StakeTokenApproval should be the same as the expectedStakeTokenApproval");
  });
});
