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
            'Authorization' => 'Bearer 1441D694AB156CE0750BAFC1138CCD46CFB3A98C5E293ADE39953B568B1597CF',
            'Content-Type' => 'application/json'
        ])->post('https://32face0d-33c9-4a91-aeaf-eed0c6487b01.pushnotifications.pusher.com/publish_api/v1/instances/32face0d-33c9-4a91-aeaf-eed0c6487b01/publishes', [
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
