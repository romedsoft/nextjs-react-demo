
interface RequestBody {
  username: string;
  password: string;
}
export async function POST(request: Request) {
    debugger;
  const body: RequestBody = await request.json();
  console.log("reqeustbody");
  console.log(body);
  const user = null;

  if (user) {

    return new Response(JSON.stringify(user));
  } else return new Response(JSON.stringify(null));
}