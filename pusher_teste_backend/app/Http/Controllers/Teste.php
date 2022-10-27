<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class Teste extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param 
     * @return \Illuminate\Http\Response
     */
    public function create(Request $request)
    {
        $request = Http::withHeaders([
            'Authorization' => 'Bearer 17694F470EFE7A601DB5C6638E5FF788E70343B79F7F52A98FCC2E78CADB409F',
            'Content-Type' => 'application/json'
        ])->post('https://d2d9f267-9504-44cb-9fed-72373f22cb50.pushnotifications.pusher.com/publish_api/v1/instances/d2d9f267-9504-44cb-9fed-72373f22cb50/publishes', [
            "interests" => ["hello"],
            "web" => 
                [
                    "notification" => [
                        "title" => $request->title, 
                        "body" => $request->body
                    ]
                ]
            ]);

        return $request->body();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
