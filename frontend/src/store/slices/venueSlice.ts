import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Venue {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  capacity: number;
  website: string;
  techSpecs: string;
  notes: string;
  createdAt: string;
  updatedAt: string;
}

interface VenueState {
  venues: Venue[];
  currentVenue: Venue | null;
  loading: boolean;
  error: string | null;
}

export const fetchVenues = createAsyncThunk('venues/fetchVenues', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get('/api/venues');
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to fetch venues');
  }
});

export const fetchVenueById = createAsyncThunk(
  'venues/fetchVenueById',
  async (id: string, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/venues/${id}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to fetch venue details');
    }
  }
);

export const createVenue = createAsyncThunk(
  'venues/createVenue',
  async (venueData: Omit<Venue, 'id' | 'createdAt' | 'updatedAt'>, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/venues', venueData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to create venue');
    }
  }
);

export const updateVenue = createAsyncThunk(
  'venues/updateVenue',
  async ({ id, venueData }: { id: string; venueData: Partial<Venue> }, { rejectWithValue }) => {
    try {
      const response = await axios.put(`/api/venues/${id}`, venueData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to update venue');
    }
  }
);

export const deleteVenue = createAsyncThunk(
  'venues/deleteVenue',
  async (id: string, { rejectWithValue }) => {
    try {
      await axios.delete(`/api/venues/${id}`);
      return id;
    } catch (error: any) {
      return rejectWithValue(error.response?.data?.message || 'Failed to delete venue');
    }
  }
);

const initialState: VenueState = {
  venues: [],
  currentVenue: null,
  loading: false,
  error: null,
};

const venueSlice = createSlice({
  name: 'venues',
  initialState,
  reducers: {
    clearVenueError: (state) => {
      state.error = null;
    },
    clearCurrentVenue: (state) => {
      state.currentVenue = null;
    },
  },
  extraReducers: (builder) => {
    // Fetch all venues
    builder.addCase(fetchVenues.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchVenues.fulfilled, (state, action: PayloadAction<Venue[]>) => {
      state.loading = false;
      state.venues = action.payload;
    });
    builder.addCase(fetchVenues.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Fetch venue by ID
    builder.addCase(fetchVenueById.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchVenueById.fulfilled, (state, action: PayloadAction<Venue>) => {
      state.loading = false;
      state.currentVenue = action.payload;
    });
    builder.addCase(fetchVenueById.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Create venue
    builder.addCase(createVenue.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(createVenue.fulfilled, (state, action: PayloadAction<Venue>) => {
      state.loading = false;
      state.venues.push(action.payload);
    });
    builder.addCase(createVenue.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Update venue
    builder.addCase(updateVenue.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(updateVenue.fulfilled, (state, action: PayloadAction<Venue>) => {
      state.loading = false;
      const index = state.venues.findIndex((venue) => venue.id === action.payload.id);
      if (index !== -1) {
        state.venues[index] = action.payload;
      }
      state.currentVenue = action.payload;
    });
    builder.addCase(updateVenue.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    // Delete venue
    builder.addCase(deleteVenue.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(deleteVenue.fulfilled, (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.venues = state.venues.filter((venue) => venue.id !== action.payload);
      if (state.currentVenue && state.currentVenue.id === action.payload) {
        state.currentVenue = null;
      }
    });
    builder.addCase(deleteVenue.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export const { clearVenueError, clearCurrentVenue } = venueSlice.actions;
export default venueSlice.reducer;
