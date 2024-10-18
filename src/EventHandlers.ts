/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  StakeToken,
  StakeToken_Approval,
  StakeToken_AssetConfigUpdated,
  StakeToken_AssetIndexUpdated,
  StakeToken_Cooldown,
  StakeToken_CooldownSecondsChanged,
  StakeToken_DistributionEndChanged,
  StakeToken_EIP712DomainChanged,
  StakeToken_ExchangeRateChanged,
  StakeToken_FundsReturned,
  StakeToken_Initialized,
  StakeToken_MaxSlashablePercentageChanged,
  StakeToken_PendingAdminChanged,
  StakeToken_Redeem,
  StakeToken_RewardsAccrued,
  StakeToken_RewardsClaimed,
  StakeToken_RoleClaimed,
  StakeToken_Slashed,
  StakeToken_SlashingExitWindowDurationChanged,
  StakeToken_SlashingSettled,
  StakeToken_Staked,
  StakeToken_Transfer,
  StakeToken_UserIndexUpdated,
} from "generated";

StakeToken.Approval.handler(async ({ event, context }) => {
  const entity: StakeToken_Approval = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    owner: event.params.owner,
    spender: event.params.spender,
    value: event.params.value,
  };

  context.StakeToken_Approval.set(entity);
});

StakeToken.AssetConfigUpdated.handler(async ({ event, context }) => {
  const entity: StakeToken_AssetConfigUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    asset: event.params.asset,
    emission: event.params.emission,
  };

  context.StakeToken_AssetConfigUpdated.set(entity);
});

StakeToken.AssetIndexUpdated.handler(async ({ event, context }) => {
  const entity: StakeToken_AssetIndexUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    asset: event.params.asset,
    index: event.params.index,
  };

  context.StakeToken_AssetIndexUpdated.set(entity);
});

StakeToken.Cooldown.handler(async ({ event, context }) => {
  const entity: StakeToken_Cooldown = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    amount: event.params.amount,
  };

  context.StakeToken_Cooldown.set(entity);
});

StakeToken.CooldownSecondsChanged.handler(async ({ event, context }) => {
  const entity: StakeToken_CooldownSecondsChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    cooldownSeconds: event.params.cooldownSeconds,
  };

  context.StakeToken_CooldownSecondsChanged.set(entity);
});

StakeToken.DistributionEndChanged.handler(async ({ event, context }) => {
  const entity: StakeToken_DistributionEndChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    endTimestamp: event.params.endTimestamp,
  };

  context.StakeToken_DistributionEndChanged.set(entity);
});

StakeToken.EIP712DomainChanged.handler(async ({ event, context }) => {
  const entity: StakeToken_EIP712DomainChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.StakeToken_EIP712DomainChanged.set(entity);
});

StakeToken.ExchangeRateChanged.handler(async ({ event, context }) => {
  const entity: StakeToken_ExchangeRateChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    exchangeRate: event.params.exchangeRate,
  };

  context.StakeToken_ExchangeRateChanged.set(entity);
});

StakeToken.FundsReturned.handler(async ({ event, context }) => {
  const entity: StakeToken_FundsReturned = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount: event.params.amount,
  };

  context.StakeToken_FundsReturned.set(entity);
});

StakeToken.Initialized.handler(async ({ event, context }) => {
  const entity: StakeToken_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.StakeToken_Initialized.set(entity);
});

StakeToken.MaxSlashablePercentageChanged.handler(async ({ event, context }) => {
  const entity: StakeToken_MaxSlashablePercentageChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newPercentage: event.params.newPercentage,
  };

  context.StakeToken_MaxSlashablePercentageChanged.set(entity);
});

StakeToken.PendingAdminChanged.handler(async ({ event, context }) => {
  const entity: StakeToken_PendingAdminChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newPendingAdmin: event.params.newPendingAdmin,
    role: event.params.role,
  };

  context.StakeToken_PendingAdminChanged.set(entity);
});

StakeToken.Redeem.handler(async ({ event, context }) => {
  const entity: StakeToken_Redeem = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.StakeToken_Redeem.set(entity);
});

StakeToken.RewardsAccrued.handler(async ({ event, context }) => {
  const entity: StakeToken_RewardsAccrued = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    amount: event.params.amount,
  };

  context.StakeToken_RewardsAccrued.set(entity);
});

StakeToken.RewardsClaimed.handler(async ({ event, context }) => {
  const entity: StakeToken_RewardsClaimed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    amount: event.params.amount,
  };

  context.StakeToken_RewardsClaimed.set(entity);
});

StakeToken.RoleClaimed.handler(async ({ event, context }) => {
  const entity: StakeToken_RoleClaimed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    newAdmin: event.params.newAdmin,
    role: event.params.role,
  };

  context.StakeToken_RoleClaimed.set(entity);
});

StakeToken.Slashed.handler(async ({ event, context }) => {
  const entity: StakeToken_Slashed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    destination: event.params.destination,
    amount: event.params.amount,
  };

  context.StakeToken_Slashed.set(entity);
});

StakeToken.SlashingExitWindowDurationChanged.handler(async ({ event, context }) => {
  const entity: StakeToken_SlashingExitWindowDurationChanged = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    windowSeconds: event.params.windowSeconds,
  };

  context.StakeToken_SlashingExitWindowDurationChanged.set(entity);
});

StakeToken.SlashingSettled.handler(async ({ event, context }) => {
  const entity: StakeToken_SlashingSettled = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.StakeToken_SlashingSettled.set(entity);
});

StakeToken.Staked.handler(async ({ event, context }) => {
  const entity: StakeToken_Staked = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    assets: event.params.assets,
    shares: event.params.shares,
  };

  context.StakeToken_Staked.set(entity);
});

StakeToken.Transfer.handler(async ({ event, context }) => {
  const entity: StakeToken_Transfer = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    from: event.params.from,
    to: event.params.to,
    value: event.params.value,
  };

  context.StakeToken_Transfer.set(entity);
});

StakeToken.UserIndexUpdated.handler(async ({ event, context }) => {
  const entity: StakeToken_UserIndexUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    asset: event.params.asset,
    index: event.params.index,
  };

  context.StakeToken_UserIndexUpdated.set(entity);
});
