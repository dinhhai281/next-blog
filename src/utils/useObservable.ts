import { useEffect, SetStateAction, Dispatch } from 'react';
import { Observable } from 'rxjs';

export const useObservable = <T extends unknown>(input$: Observable<T>, setter: Dispatch<SetStateAction<T>>) => {
  useEffect(() => {
    const subscription = input$.subscribe(setter);

    return () => subscription.unsubscribe();
  }, [input$]);
};
