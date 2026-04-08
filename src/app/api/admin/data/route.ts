import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET() {
  try {
    const cookieStore = await cookies();
    const isAuth = cookieStore.get('admin_auth')?.value === 'true';

    if (!isAuth) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    if (!process.env.GOOGLE_SHEETS_URL) {
      return NextResponse.json({ error: 'Google Sheets URL not configured' }, { status: 500 });
    }

    const response = await fetch(process.env.GOOGLE_SHEETS_URL);
    if (!response.ok) {
        throw new Error('Failed to fetch from Google Sheets');
    }
    const data = await response.json();

    return NextResponse.json(data, {
      headers: {
        'Cache-Control': 'no-store, max-age=0',
      }
    });
  } catch (error) {
    console.error('Admin Data Error:', error);
    return NextResponse.json({ error: 'Failed to fetch registration data' }, { status: 500 });
  }
}
