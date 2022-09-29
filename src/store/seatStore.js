import create from 'zustand';

const defaultData = [
  {
    id: 1,
    name: 'A1',
    price: 300,
    isSelected: false,
  },
  {
    id: 2,
    name: 'A2',
    price: 300,
    isSelected: false,
  },
  {
    id: 3,
    name: 'A3',
    price: 300,
    isSelected: false,
  },
  {
    id: 4,
    name: 'B1',
    price: 700,
    isSelected: false,
  },
  {
    id: 5,
    name: 'B2',
    price: 700,
    isSelected: false,
  },
  {
    id: 6,
    name: 'B3',
    price: 700,
    isSelected: false,
  },
  {
    id: 7,
    name: 'C1',
    price: 700,
    isSelected: false,
  },
  {
    id: 8,
    name: 'C2',
    price: 700,
    isSelected: false,
  },
  {
    id: 9,
    name: 'C3',
    price: 700,
    isSelected: false,
  },
];

const initialTime = 60;
export const useStore = create((set) => ({
  initialTimerValue: 60,
  //   defaultData: [
  //     {
  //       id: 1,
  //       name: 'A1',
  //       price: 300,
  //       isSelected: false,
  //     },
  //     {
  //       id: 2,
  //       name: 'A2',
  //       price: 300,
  //       isSelected: false,
  //     },
  //     {
  //       id: 3,
  //       name: 'A3',
  //       price: 300,
  //       isSelected: false,
  //     },
  //     {
  //       id: 4,
  //       name: 'B1',
  //       price: 700,
  //       isSelected: false,
  //     },
  //     {
  //       id: 5,
  //       name: 'B2',
  //       price: 700,
  //       isSelected: false,
  //     },
  //     {
  //       id: 6,
  //       name: 'B3',
  //       price: 700,
  //       isSelected: false,
  //     },
  //     {
  //       id: 7,
  //       name: 'C1',
  //       price: 900,
  //       isSelected: false,
  //     },
  //     {
  //       id: 8,
  //       name: 'C2',
  //       price: 900,
  //       isSelected: false,
  //     },
  //     {
  //       id: 9,
  //       name: 'C3',
  //       price: 900,
  //       isSelected: false,
  //     },
  //   ],
  seatData: [...defaultData],
  timer: {
    time: initialTime,
    displayTimer: false,
  },
  setTimer: () =>
    set((state) => ({
      timer: {
        ...state.timer,
        time:
          state.timer.time > 0 ? state.timer.time - 1 : (state.timer.time = 0),
      },

      setDisplayTimer: () =>
        set((state) => ({
          timer: {
            ...state.timer,
            displayTimer: true,
          },
        })),
    })),

  seatStatusUpdated: (list) => {
    return set((state) => ({
      seatData: list,
    }));
  },

  resetTimer: () => {
    return set((state) => ({
      timer: {
        ...state.timer,
        time: state.initialTimerValue,
      },
    }));
  },

  resetSeatData: (currSeatdata) => {
    let current = currSeatdata.map((ele) => {
      return { ele };
    });
    console.log('current is ', current);
    return set((state) => ({
      seatData: [...current],
    }));
  },
}));
