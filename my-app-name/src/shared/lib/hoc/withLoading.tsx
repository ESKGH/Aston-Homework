import React from 'react';

export interface WithLoadingProps {
  isLoading: boolean;
}

export function withLoading<P extends object>(
  Wrapped: React.ComponentType<P>
) {
  type Props = P & WithLoadingProps;

  const ComponentWithLoading: React.FC<Props> = ({ isLoading, ...rest }) => {
    if (isLoading) return <div>Загрузка...</div>;
    return <Wrapped {...(rest as P)} />;
  };

  ComponentWithLoading.displayName = `withLoading(${Wrapped.displayName || Wrapped.name || 'Component'})`;
  return ComponentWithLoading;
}
