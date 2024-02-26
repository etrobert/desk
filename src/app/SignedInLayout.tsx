import { CaptureItemsContextProvider } from '../data/capture-items/CaptureItemsContext';
import { TasksContextProvider } from '../data/tasks/TasksContext';
import { TasksFiltersContextProvider } from '../data/tasks/TasksFiltersContext';
import HomeButton from './HomeButton';
import LogOutButton from './LogOutButton';
import UserEmail from './UserEmail';
import { PropsWithChildren } from 'react';

function SignedInLayout({ children }: PropsWithChildren) {
  return (
    <CaptureItemsContextProvider>
      <TasksFiltersContextProvider>
        <TasksContextProvider>
          <HomeButton />
          <LogOutButton />
          <UserEmail />
          {children}
        </TasksContextProvider>
      </TasksFiltersContextProvider>
    </CaptureItemsContextProvider>
  );
}

export default SignedInLayout;
